import { prismaClient } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createUpVotesSchema=z.object({
streamId:z.string()
})


export async function POST(req:NextRequest){
try{
    const data=createUpVotesSchema.parse(await req.json());
    const session=await getServerSession();
    if(!session?.user?.email){
        return NextResponse.json({
            message:"Unauthenticated"
        },{status:403})
    }
    const user = await prismaClient.user.findUnique({
        where:{
            email:session.user.email as string
        }
    })
    if(!user){
        return NextResponse.json({
            message:"User not found"
        },{status:403})
    }
    try{
        await prismaClient.upVotes.create({
            data:{
                userId:user.id,
                streamId:data.streamId
            }
        })
    }catch(e){
        return NextResponse.json({
            message:"Error While Upvoting the stream"
        },{status:403})
    }


}catch(e){
    console.log(e)
    return NextResponse.json({
        message:"Error UpVoting the  stream"
    },{status:411})
}
}