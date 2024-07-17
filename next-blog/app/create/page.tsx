'use client'
import { Button } from '@/components/ui/button'
import axios from 'axios';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, FormEvent, useState } from 'react'

interface Formdata{
    title:string;
    content:string;
}
const Create = () => {
    const router = useRouter()
    const [formData, setFormData] = useState<Formdata>({
        title:'',
        content:''
    })
    const session = useSession()
    const user=session.data?.user?.name
if(!user){
    router.push('/api/auth/signin')
}
    const handleCahnge=(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
e.preventDefault();
const {name,value} = e.target;
setFormData({
    ...formData,[name]:value
})

    }
    const HandleSubmit=async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        // console.log(formData)
        const res = await axios.post('/api/create',formData)
        console.log(res.data)
router.push(`/blog/${res.data.response.id}`)
        
    }
  return (
    <div  className='px-4 py-2 '>
        <center>Hello {user}</center>
        <form onSubmit={HandleSubmit}  className=' max-w-lg mx-auto flex flex-col gap-4 mt-10'>
            <input type="text" value={formData.title} onChange={handleCahnge} className='px-2 rounded-sm py-2 border border-black' name='title' placeholder='Title' />
            <textarea name="content" value={formData.content} onChange={handleCahnge} placeholder='Content' className='px-2 py-2 border border-black' id=""></textarea>
            <Button type='submit'>{user?'Crerate':'Signin'}</Button>
        </form>
    </div>
  )
}

export default Create