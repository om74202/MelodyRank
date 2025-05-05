import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { prismaClient } from "@/app/lib/db";

const handler = NextAuth({
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID ?? "",
          clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
        })
      ],
      callbacks: {
        async signIn({ user }) {
          if (!user.email) return false;
      
          try {
            const existingUser = await prismaClient.user.findUnique({
              where: { email: user.email }
            });
      
            if (!existingUser) {
              await prismaClient.user.create({
                data: {
                  email: user.email,
                  provider: "Google"
                }
              });
              console.log("User created:", user.email);
            } else {
              console.log("User already exists:", user.email);
            }
      
            return true;
          } catch (error) {
            console.error("Error during sign-in:", error);
            return false;
          }
        }
      }
      
})


 export { handler as GET , handler as POST };