"use client"
import { signIn ,signOut,useSession} from "next-auth/react"

export const Appbar=()=>{
    const session = useSession()
    return (
        <div>
            <div className="flex justify-between m-4">
            <div>
                Melody
            </div>
            <div>
                {session.data?.user ? <button className="bg-blue-500 text-white font-semibold rounded-lg px-4 py-2 hover:bg-blue-600 cursor-pointer"
                onClick={()=>signOut()}
                >SignOut</button> : <button className="bg-blue-500 text-white font-semibold rounded-lg px-4 py-2 hover:bg-blue-600 cursor-pointer"
                onClick={()=>signIn()}
                >SignIn</button>}
            </div>
        </div>
        </div>
    )
}