import Allcomments from '@/components/Allcommets'
import Comments from '@/components/comments'
import { Button } from '@/components/ui/button'
import prisma from '@/utils/prisma'
import React from 'react'

const Blog = async({params}:{params:{id:string}}) => {
  const blog = await prisma.post.findUnique({
    where:{
      id:params.id
    },
    include:{
      author:true
    }
  })
  return (
    <>
    <div className=' max-w-xl px-4 py-4 mt-4 mx-auto flex flex-col gap-2 border-slate-400 rounded-md  border-1' >
      <h2><center className='text-xl font-bold '>{blog?.title}</center></h2>
      <p className='text-md font-normal'>{blog?.content}</p>
      <p className='text-sm px-2 py-2 border-slate-700 '>Written By: {blog?.author?.name} <span>on {blog?.createdAt.toLocaleDateString()}</span><span>at {blog?.createdAt.toLocaleTimeString()}</span></p>
    </div>
    {/* components */}
    <div className='max-w-xl px-4 py-4 mt-4 mx-auto flex flex-col gap-2 border-slate-400 rounded-md  border-1'>
    <Comments postId={blog?.id}/>
    Comments:
    <Allcomments  postId={blog?.id}/>
    
    </div>
    </>
  )
}

export default Blog