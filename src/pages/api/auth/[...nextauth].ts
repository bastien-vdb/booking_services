import NextAuth from "next-auth"
import type { Adapter } from "next-auth/adapters"
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/db/prisma";

if (!process.env.GITHUB_ID || !process.env.GITHUB_SECRET) {
  throw new Error(
    'Please define the GITHUB_ID and GITHUB_SECRET environment variables inside .env variables !'
  );
}

export default NextAuth({
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub || 'error';
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
})