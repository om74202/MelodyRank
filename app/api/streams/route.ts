import { PrismaClient } from "@/app/generated/prisma";
import { prismaClient } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import {z} from "zod"
const YT_REGEX=new RegExp("^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([\w-]{11})(?:\S+)?$")

const createStreamSchema = z.object({
    creatorId:    z.string(),
    url:          z.string(),
})

export async function POST(req:NextRequest){
try{
const data=createStreamSchema.parse(await req.json());
const isYT=YT_REGEX.test(data.url);
if(!isYT){
    return NextResponse.json({
        message:"Error creating stream"
    },{status:411})
}
const extractedId=data.url.split("?v=")[1];
      await prismaClient.streamer.create({
        data:{
            url:data.url,
            userId:data.creatorId,
            type:"youtube",
            extractedId
        }

      })
}catch(e){
    console.log(e)
    return NextResponse.json({
        message:"Error creating stream"
    },{status:411})
}
}