import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { userSignIn } from "../../../db/utils/User";
// import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      authorize: async (credentials) => {
        const { success, message, data } = await userSignIn(credentials);
        if (success) return data;
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.id = user?.id;
        token.email = user?.email;
        token.userName = user?.userName;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token) {
        session.id = token?.id;
        session.email = token?.email;
        session.userName = token?.userName;
      }
      return session;
    },
  },
  secret: process.env.SECRET,
  jwt: {
    secret: process.env.JWT_SECRET!,
  },
  pages: {
    signIn: "/signin",
  },
});
