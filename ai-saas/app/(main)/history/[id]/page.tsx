import { Button } from '@/components/ui/button'
import prisma from '@/utils/db'
import { marked } from 'marked'
import React from 'react'

const HistoryTopic = async({params}:{params:{id:string}}) => {
    const response = await prisma.aiResponse.findUnique({
        where:{
            id:params.id
        }
    })
  return (
    <div className="flex flex-col gap-4 max-w-3xl mx-auto p-5">
        <h1>{response?.templetName}</h1>
        <div className="flex gap-3 items-center p-5">
            <h1>query: </h1>
            <p>{response?.prompt}?</p>
         
        </div>
       <div dangerouslySetInnerHTML={{__html:marked(response?.response??'')}}></div>
    </div>
  )
}

export default HistoryTopic