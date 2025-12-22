import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// @ts-ignore
import { Users, Radio, Headphones } from "lucide-react";
import { Appbar } from "@/components/Appbar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth-options";
import { MotionLanding } from "@/components/motionLanding";

// This async component runs on the server ("Server Component" in Next.js terms)
// so it can read the user's session before rendering the animated landing hero.

export default async function LandingPage() {
  const session = await getServerSession(authOptions);
 

  return (
    <MotionLanding/>
  );
}
