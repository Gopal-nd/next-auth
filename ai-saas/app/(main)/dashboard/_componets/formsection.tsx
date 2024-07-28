'use client'
import { templates } from '@/app/(data)/templet'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React, { FC, useState } from 'react'
interface Props{
    slug:string
    userformInput:any
    loading:boolean
}
const Formsection:FC<Props> = ({slug,loading,userformInput}) => {
    const user =useUser()
    const email:string|any = user.user?.primaryEmailAddress?.emailAddress
    const [formdata, setFormdata]=useState<any>()
    const HandleChangeEvent=(e:any)=>{
        const {name, value} = e.target;
        setFormdata({...formdata,[name]:value})
        
    }
    const handleSubmit=(e:any)=>{
        
        e.preventDefault();
        if(!formdata){
            return
        }
        userformInput(formdata)
        
    }
    const selectedTemplet = templates.find((item)=>item.slug===slug)
  return (
    <div className='flex flex-col gap-5 shadow-lg p-5 border rounded-lg'>
                    <Image width={20} alt='image' height={20} src={selectedTemplet?.icon ??''}  />
                    <h2 className='text-2xl font-semibold mt-2 ' >{selectedTemplet?.name}</h2>
                    <p className=''>{selectedTemplet?.desc}</p>
                    <form onSubmit={handleSubmit}>
                        {
                            selectedTemplet?.form.map((item,index)=>(
                                <div key={index} className='flex flex-col '>
                                <label className=' font-bold' htmlFor="">{item.label}:</label>
                                {
                                    item.field=='textarea'?
                                    <Textarea
                                    onChange={HandleChangeEvent}
                                    name={item.name}
                                    required={item.required}
                                    
                                    className='mb-2' placeholder='Enter your Question...'/>:
                                    item.field=='textarea'?
                                    <Textarea 
                                    name={item.name}
                                    placeholder='optional...'/>:null
                                }
                                </div>
                            ))
                        }
                        <Button className='mt-3 w-full' type='submit'
                        disabled={loading||!email}>{
                            email?loading?'loading..':"Search":'login'}</Button>
                    </form>
{selectedTemplet?.slug}
    </div>
  )
}

export default Formsection