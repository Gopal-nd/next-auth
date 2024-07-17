import prisma from "@/utils/prisma";
import { GetUser } from "@/utils/user";
import { NextRequest, NextResponse } from "next/server"

export const POST = async (req: NextRequest, res: NextResponse) => {
    const {postId ,text} = await req.json();
    console.log(postId,text)
    const user = await GetUser()
    const email= user?.email
    console.log(email)
    const comment = await prisma.comment.create({
        data:{
            text:text,
            authorEmail:email,
            postId:postId
        }
    })

    return NextResponse.json({
        
        message: "succes",
        status: 200,
        response:comment
    })

}
