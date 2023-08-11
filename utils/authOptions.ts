import startDb from "@/lib/db";
import UserModal from "@/models/userModel";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

function setUserProperties(target: Record<string, any>, source: Record<string, any>) {
  target.id = source.id;
  target.name = source.name;
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        await startDb();

        const user = await UserModal.findOne({ email });
        if (!user) throw Error("email/password mismatch!");

        const passwordmatch = await user.comparePassword(password);
        if (!passwordmatch) throw Error("email/password mismatch!");

        return {
          name: user.name,
          email: user.email,
          id: user._id,
        };
      },
    }),
  ],
  callbacks: {
    async jwt(params: any) {
      if (params?.user?.name) {
        setUserProperties(params.token, params.user);
      }
      return params.token;
    },
    async session({ session, token }) {
      if (session?.user) {
        setUserProperties(session.user, token);
      }
      return session;
    },
  },
  pages: {
    signIn: "/sign-in",
    error: "/error",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
