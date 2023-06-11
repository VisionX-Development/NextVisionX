import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    name: string;
    email: string;
    role: string;
  }

  interface Session extends DefaultSession {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: string;
  }
}
