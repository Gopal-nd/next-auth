'use client'
import React, { useState } from 'react'
import Formsection from '../../_componets/formsection'
import OutputSection from '../../_componets/outputSection'
import { templates } from '@/app/(data)/templet'
import { chatSession } from '@/utils/ai'

const CreateContent = ({params}:{params:{slug:string}}) => {
    const [aiOutput, setAioutput] = useState('')
    const [loading, setLoading] =useState(false)
    const selectedTemplet = templates.find((item)=>item.slug===params.slug)
 async   function userformInput(e:any){
    setLoading(true)
        // console.log(e.niche)
        const propt =e.niche+',' +selectedTemplet?.aiPrompt
        console.log(propt)
        const result = await chatSession.sendMessage(propt);
        setAioutput(result.response.text());
  console.log(result.response.text());
        setLoading(false)
    }

  return (
    <div className='p-5 grid grid-cols-1 md:grid-cols-2 gap-5'>

        {/* formsection */}
        <Formsection slug={params.slug}
        loading={loading} userformInput={userformInput}/>


        {/* outputsection */}
        <OutputSection aiOutput={aiOutput}/>
    
    </div>
  )
}

export default CreateContent