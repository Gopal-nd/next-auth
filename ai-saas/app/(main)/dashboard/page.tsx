'use client'
import React, { useState } from 'react'
import SearchSection from '../_components/SearchSection'
import Templets from '../_components/Templets'

const Dashboard = () => {
  const [searchData, setSearchData] = useState('');
  const handleSearch = (data:string) => {
    setSearchData(data);
  };
  return (
    <div className='w-full '>
      {/* serch section / */}
      <SearchSection onSearch={handleSearch}/>

      {/* Trmplets section  */}
      <Templets searchData={searchData}/>
    </div>
  )
}

export default Dashboard