'use client'
import React, { useEffect, useState } from 'react'
import Formsection from '../../_componets/formsection'
import OutputSection from '../../_componets/outputSection'
import { templates } from '@/app/(data)/templet'
import { chatSession } from '@/utils/ai'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import PreviousMap from 'postcss/lib/previous-map'
import prisma from '@/utils/db'
import { useRouter } from 'next/navigation'

const CreateContent = ({params}:{params:{slug:string}}) => {
  const router = useRouter()
  const user = useUser();
 
  const email:string|any = user.user?.primaryEmailAddress?.emailAddress
  console.log('emill is',email)
    const [aiOutput, setAioutput] = useState('')
    const [loading, setLoading] =useState(false)
  
    const selectedTemplet = templates.find((item)=>item.slug===params.slug)
//  const date = new Date()
    async   function userformInput(e:any){
    setLoading(true)
        // console.log(e.niche)
        const propt =e.niche+',' +selectedTemplet?.aiPrompt
        console.log(propt)
        const result = await chatSession.sendMessage(propt);
        setAioutput(result.response.text());
  console.log(result.response.text());
  const data ={
    email:email,
    prompt:e.niche,
    dataText:result.response.text(),
    slug:params.slug
  }
  const response =PostDetails(data)
  console.log(response)
  setLoading(false)

    }

    async function PostDetails(data:any){
      const res = await axios.post('/api/history',data)
      return res.data
    }
    const isBrowser = typeof window !== 'undefined';

    useEffect(()=>{
    
     
    },[])
  return (
    <>{
      isBrowser &&(

    <div className='p-5 grid grid-cols-1 md:grid-cols-2 gap-5'>

        {/* formsection */}
        <Formsection slug={params.slug}
        loading={loading} userformInput={userformInput}/>


        {/* outputsection */}
        <OutputSection aiOutput={aiOutput}/>
    
    </div>
      )
    }
        </>
  )
}

export default CreateContent

