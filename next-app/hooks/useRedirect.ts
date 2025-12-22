import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export default function useRedirect() {
  const session = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Client-side guard: kick visitors back to "/" if NextAuth says unauthenticated
    if (session.status === "unauthenticated") {
      router.push("/");
    }
  }, [session]);
}
