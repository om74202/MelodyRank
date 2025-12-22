import { type DefaultSession } from "next-auth";

// NextAuth module augmentation: lets TypeScript know our session carries an `id`
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string | undefined;
    email: string;
  }
}
