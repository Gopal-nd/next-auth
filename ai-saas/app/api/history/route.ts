import prisma from "@/utils/db"
import { NextResponse } from "next/server"

export async function POST(req:any,){
    const {email,prompt,dataText,slug} = await req.json()
    const res = await prisma.aiResponse.create({
        data:{
          email:email,
          prompt:prompt,
          response:dataText,
          templetName:slug
        }
      })
      console.log(res)
      return NextResponse.json({
        msg:res
      })
}
