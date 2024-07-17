
import React,{FC, FormEvent, useState} from 'react'
import { Button } from './ui/button'
import axios from 'axios'
import prisma from '@/utils/prisma'
interface Props{
    postId:string|undefined
}
const Allcomments:FC<Props> = async({postId}) => {
 
    const comments= await prisma.comment.findMany({
        where:{
            postId:postId
        },
        include:{
            author:true
        },
        orderBy:{
            createdAt:"desc"
        }
    })
    console.log(comments)
   
  return (
    <div>
        {
            comments.map((comment:any,index:number)=>(
                <div key={comment.id} className=' px-4 py-4 mt-4 mx-auto flex flex-col gap-2 border-slate-400 rounded-md shadow-sm'>
                    <p>{comment.author.name} on <span>{comment.createdAt.toLocaleDateString()} at <span>{comment.createdAt.toLocaleTimeString()}</span></span></p>
                    <h1>{comment.text}</h1>

                </div>
            ))
        }
    </div>
  )
}

export default Allcomments