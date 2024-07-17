
import prisma from "@/utils/prisma"
import { NextRequest, NextResponse } from "next/server"
import {any, string, z} from 'zod'
import { getServerSession } from "next-auth"
import { GetUser } from "@/utils/user"
import { authOptions } from "@/utils/db"

const posttype = z.object({
    title:string().min(1),
    content:string().min(1),
    authorEmail:string()
})



export const POST=async(req:NextRequest,res:NextResponse)=>{
    const data:any = await req.json()
    const user = await GetUser()
    const email= user?.email
    console.log(email)
    
    
    console.log(data)
  const insert =await prisma.post.create({
    data:{
        content:data.content,
        title:data.title,
        authorEmail:email
    }
  })
    return NextResponse.json({
        message:"success",
        status:200,
        response :insert
    })
}