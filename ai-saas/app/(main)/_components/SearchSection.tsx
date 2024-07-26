'use client'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React, { useState } from 'react'
interface SearchComponentProps {
    onSearch: (data: string) => void;
  }
const SearchSection:  React.FC<SearchComponentProps> = ({onSearch}:any) => {
    const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(inputValue);
  };
    
  return (
    <div className='p-10  w-full shadow-2xl flex flex-grow justify-center bg-slate-600 items-center flex-col gap-5'>
        <h2 className='text-3xl font-bold '>Brows All Templets </h2>
        <div>
            <Input  onChange={(e)=>{onSearch(e.target.value)}} placeholder='🔍 Search templet' className='' />
        </div>
         
    </div>
  )
}

export default SearchSection