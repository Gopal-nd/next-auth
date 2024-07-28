'use client'
import { Button } from '@/components/ui/button'
import { marked } from 'marked'
import React, { useEffect, useRef, useState } from 'react'

const HistoryCopy = (data:any) => {
    const [aidata, setAidata]=useState<string>('')
    console.log(data)
    console.log(aidata)
    const copyRef=useRef<any>()
    const handleCopy=async()=>{
        const text =copyRef.current
        navigator.clipboard.writeText(text)
    }
    useEffect(()=>{
        setAidata(data.response?.response)
    },[data])
  return (
    <div className="flex flex-col gap-4 max-w-3xl mx-auto p-5">
    <div className="flex justify-between items-center p-5">
        <h1>Result</h1>
        <Button onClick={handleCopy}>Copy</Button>
    </div>
   <div ref={copyRef} dangerouslySetInnerHTML={{__html:marked(aidata??'')}}></div>
</div>
  )
}

export default HistoryCopy