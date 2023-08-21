import startDb from "@/lib/db";
import UserModal from "@/models/userModel";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

function setUserProperties(
  target: Record<string, any>,
  source: Record<string, any>
) {
  target.id = source.id;
  target.name = source.name;
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        await startDb();

        const user = await UserModal.findOne({ email });
        if (!user) throw Error("email/password mismatch!");

        const isPasswordmatch = await user.comparePassword(password);
        if (!isPasswordmatch) throw Error("email/password mismatch!");

        return {
          name: user.name,
          email: user.email,
          id: user._id,
        };
      },
    }),
  ],
  callbacks: {
    jwt(params: any) {
      if (params?.user?.name) {
        setUserProperties(params.token, params.user);
      }
      return params.token;
    },
    session({ session, token }) {
      if (session?.user) {
        setUserProperties(session.user, token);
      }
      return session;
    },
  },
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
