import React, { FC, useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';


interface Props{
    aiOutput:string
}
const OutputSection:FC<Props> = ({aiOutput}) => {
    const Editref:any =useRef()
    useEffect(()=>{
        const edit = Editref.current.getInstance()
        edit.setMarkdown(aiOutput)
        
    },[aiOutput])
  return (
    <div className=' shadow-lg'>
        <div className='flex  justify-between item-center p-5 '>
            <h1>Your Result</h1>
            <Button>Copy</Button>
        </div>
          <Editor
    initialValue="Your Response will come here"
    ref={Editref}
    height="600px"
    initialEditType="markdown"
    useCommandShortcut={true}
    onChange={()=>console.log(Editref.current.getInstance().getMarkdown())}
  />
    </div>
  )
}

export default OutputSection