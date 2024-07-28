'use client'
import { UserProfile, useUser } from '@clerk/nextjs'
import React from 'react'

const Setting = () => {
  const user = useUser();
  const email = user.user?.primaryEmailAddress?.emailAddress
  return (
    <div className='flex flex-col gap-5 items-center justify-between mx-auto max-w-xl'>
      <h1><center>Your Settings</center></h1>

      <div >
        {
          email?
          <UserProfile />:
          <h1>Login Now</h1>
        }
      </div>
    </div>
  )
}

export default Setting