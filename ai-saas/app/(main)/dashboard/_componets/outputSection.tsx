'use client'
import React, { FC, useEffect, useMemo, useRef, useState } from 'react'
import JoditEditor from 'jodit-react';

// import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';

import {marked} from 'marked';
interface Props{
    aiOutput:string
}
const OutputSection:FC<Props> = ({aiOutput}) => {
  const [editor, setEditor] = useState('')
  // const valueref = useRef()
  const myDivRef = useRef<HTMLDivElement | null>(null);

  // console.log(editor)
    const Editref:any =useRef()
   
  
    const handleClick = () => {
      const divElement = myDivRef.current;
      
      if (divElement) {
        const divText = divElement.textContent;
        navigator.clipboard.writeText(divText||'')
      }
    };
    useEffect(()=>{
      const divElement = myDivRef.current;
      
      if (divElement) {
        const divText = divElement.textContent;
        // navigator.clipboard.writeText(divText||'')
        setEditor(divText||'no text found')
      }
    },[aiOutput])
  return (
    <div className=' shadow-lg'>
        <div className='flex  justify-between item-center p-5 '>
            <h1>Your Result</h1>
            <Button onClick={handleClick}>Copy</Button>
        </div>
          {/* <JoditEditor
    
    ref={Editref}
    //set the text area value
    value={editor}
    
    
    onChange={newContent => setEditor(newContent)}
  /> */}
   <div  ref={myDivRef} className='border shadow-sm p-2'   dangerouslySetInnerHTML={{ __html: marked(aiOutput) }}></div>
    </div>
  )
}

export default OutputSection