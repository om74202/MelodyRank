import { PrismaClient } from "@/app/generated/prisma";
import { prismaClient } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import {z} from "zod"
const YT_REGEX = new RegExp("^https?:\\/\\/(www\\.)?youtube\\.com\\/watch\\?.*v=[\\w-]{11}");


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
        message:"Error  invalid URL",
        error:isYT
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
      return NextResponse.json({
        message:"Stream successfully created",
        withId : data.creatorId
      },{status:200})
}catch(e){
    console.log(e)
    return NextResponse.json({
        message:"Error creating stream",
        error:e
    },{status:411})
}
}

export async function GET(req:NextRequest){
    const creatorId = req.nextUrl.searchParams.get("creatorId");
    if(!creatorId){
        return NextResponse.json({
            message:"Invalid User ID"
        },{status:411})
    }

    try{const streams=await prismaClient.streamer.findMany({
        where:{
            userId:creatorId ?? ""
        }
    })
    return NextResponse.json({
        streams:streams
    })}catch(e){
        return NextResponse.json({
            message:"Stream not found"
        },{status:411})
    }
}