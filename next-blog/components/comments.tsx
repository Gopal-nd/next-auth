'use client'
import React,{FC, FormEvent, useState} from 'react'
import { Button } from './ui/button'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
interface Props{
    postId:string|undefined
}
const Comments:FC<Props> = ({postId}) => {
    const router = useRouter()
    const session = useSession()
    const user=session.data?.user?.name

    const [comment ,setComment] = useState<string>('')
   const handleCommentSubmit = async(e:FormEvent)=>{
    e.preventDefault()
  if(comment.length<1){

    return 
  }
  
    const submit = await axios.post('/api/comment',{
        postId,
        text:comment
    })
router.refresh()
setComment('')
   }
  return (
    <div>
      {
        user?(
          <form  onSubmit={handleCommentSubmit}>
      <input type="text" value={comment} onChange={(e)=>setComment(e.target.value)} placeholder='comment here..' />
      <Button type='submit'>Comment</Button>
    </form>):(
      <Button ><Link href={'/api/auth/signin'}>SignIn to Comment</Link></Button>
    )
        }
    </div>
  )
}

export default Comments