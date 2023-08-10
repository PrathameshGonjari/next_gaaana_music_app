import startDb from "@/lib/db";
import UserModal from "@/models/userModel";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
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
    jwt(params: any) {
      if (params?.user?.name) {
        params.token.name = params.user.name;
        params.token.id = params.user.id;
      }
      return params.token;
    },
    session({ session, token }) {
      if (session?.user) {
        (session.user as { id: string }).id = token.id as string;
        (session.user as { name: string }).name = token.name as string;
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
