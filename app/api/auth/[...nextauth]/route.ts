import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID ?? "",
          clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
        })
      ],
      // callbacks: {
      //   async session({ session, token }) {
      //     // Add user ID to the session
      //     if (session.user && token.sub) {
      //       session.user.id = token.sub; // `sub` = user's ID from the JWT
      //     }
      //     return session;
      //   },
      // },
})


 export { handler as GET , handler as POST };