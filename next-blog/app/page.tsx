// import { blogs } from '@/data/data';\
import prisma from '@/utils/prisma';
import Link from 'next/link';

import React from 'react'

const Home = async() => {
  const blogs = await prisma.post.findMany({
orderBy:{
  createdAt:'desc'
},
include:{
author:true
}})
  return (
    <div className='mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5' >
    {
      blogs.map((blog)=>(
          <div key={blog.id} className='px-2 text-center py-2 rounded-sm shadow-xl  border-2 border-black'>
        <Link href={`/blog/${blog.id}`}>
            <h1> Title :{blog.title}</h1>
            <p>Written By :{blog.author?.name}</p>
        </Link>
          </div>
      ))
    }
    </div>
  )
}

export default Home;

