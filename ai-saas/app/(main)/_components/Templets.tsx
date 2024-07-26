'use client'
import { templates } from '@/app/(data)/templet'
import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react'

export interface  Templates {
    name: string;
    desc: string;
    category: string;
    icon: string;
    aiPrompt: string;
    slug: string;
    form: ({
        label: string;
        field: string;
        name: string;
        required: boolean;
    } | {
        label: string;
        field: string;
        name: string;
        required?: undefined;
    })[];
}
interface Props{
    searchData:string
}
const Templets:FC<Props> = ({searchData}) => {
    const [temp, setTemp] = useState(templates!)
    useEffect(()=>{
        if(searchData){

            const list = templates.filter((item)=>item.name.toLocaleLowerCase().includes(searchData.toLocaleLowerCase()))
            setTemp(list)
        }
    },[searchData])
  return (
    <div className='grid grid-col-2 md:grid-cols-3 lg:grid-col-4 gap-5 px-10 py-10'>
        {
            temp.map((templet:Templates,index:number)=>(
                <div key={index} className='p-5 shadow-md rounded-md border flex flex-col hover:scale-110 transition-all gap-2 '>
                    <Link href={`/dashboard/content/${templet.slug}`}>
                    <Image width={20} alt='image' height={20} src={templet.icon}  />
                    <h1 className='text-2xl font-semibold'>{templet.name}</h1>
                    <p className=' line-clamp-3'>{templet.desc}</p>
                    </Link>
                </div>
            ))
        }
    </div>
  )
}

export default Templets