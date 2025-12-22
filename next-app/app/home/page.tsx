import HomeView from "@/components/HomeView";
import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth";



export default async function Home(){
  // Runs on the server so we can read the session before deciding what to render.
  const session =await  getServerSession(authOptions);

  if (!session?.user.id) {
    return <h1>Please Log in....</h1>;
  }
 // Render the actual UI once we know the visitor is authenticated
 return <HomeView></HomeView>

}
