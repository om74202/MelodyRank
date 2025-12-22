import NextAuth from "next-auth";

import { authOptions } from "@/lib/auth-options";

// Next.js "route handler" that wires NextAuth's GET/POST endpoints in one place.
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
