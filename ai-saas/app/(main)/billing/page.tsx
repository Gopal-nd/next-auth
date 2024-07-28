import { Button } from '@/components/ui/button'
import prisma from '@/utils/db'
import { currentUser } from '@clerk/nextjs/server'
import { CheckIcon } from 'lucide-react'
import React from 'react'

const Billing = async() => {
  const user = await currentUser()
  const email:string|any=user?.primaryEmailAddress?.emailAddress
 
  const length = await prisma.aiResponse.findMany({
    where:{
      email:email
    }
  })
  
  const count = length.reduce((init,list)=>{

    return init+Number(list.response?.length)
  }
  ,0)
  // console.log(count)
  return (
<div className='flex flex-col gap-3'>
{
  email &&(
    <div className=" m-5 w-full h-56 flex flex-col gap-2 px-2 py-2 border-2 rounded-md">
      <h1>Your Usage</h1>
      <div className="bg-gray-400 w-full h-1 rounded-sm">
        <div className='bg-green-400   h-1' style={{ width: `${(count / 10000) * 100}%` }} />
      </div>
      <h1>{count+"/10000"} Credit Usage</h1>

      <Button className='mt-10'> Upgrade Now </Button>
    </div>

  )
}
    <div className="w-full max-w-4xl mx-auto py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="bg-card rounded-lg p-6 md:p-8 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl md:text-3xl font-bold">Free Plan</h3>
            <div className="text-4xl md:text-5xl font-bold">
              <span className="text-primary">₹0</span>
              <span className="text-muted-foreground text-base font-normal">/month</span>
            </div>
          </div>
          <div className="mt-6 md:mt-8 grid gap-4">
            <div className="flex items-center gap-3">
              <CheckIcon className="w-5 h-5 text-primary" />
              <span>10,000 Tokens</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-5 h-5 text-primary" />
              <span>Basic Features</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-5 h-5 text-primary" />
              <span>Community Support</span>
            </div>
          </div>
          <Button className="mt-6 md:mt-8 w-full">Get Started</Button>
        </div>
        <div className="bg-card rounded-lg p-6 md:p-8 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl md:text-3xl font-bold">Pro Plan</h3>
            <div className="text-4xl md:text-5xl font-bold">
              <span className="text-primary">₹10</span>
              <span className="text-muted-foreground text-base font-normal">/month</span>
            </div>
          </div>
          <div className="mt-6 md:mt-8 grid gap-4">
            <div className="flex items-center gap-3">
              <CheckIcon className="w-5 h-5 text-primary" />
              <span>1,000,000 Tokens</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-5 h-5 text-primary" />
              <span>Advanced Features</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="w-5 h-5 text-primary" />
              <span>Priority Support</span>
            </div>
          </div>
          <Button className="mt-6 md:mt-8 w-full">Get Started</Button>
        </div>
      </div>
      <div className="mt-12 md:mt-16 grid gap-8">
        <div className="bg-card rounded-lg p-6 md:p-8 shadow-sm">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Plan Comparison</h3>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="grid gap-2">
              <div className="font-medium">Token Count</div>
              <div className="text-muted-foreground">
                <span className="text-primary font-bold">10,000</span> Tokens
              </div>
            </div>
            <div className="grid gap-2">
              <div className="font-medium">Price</div>
              <div className="text-muted-foreground">
                <span className="text-primary font-bold">₹0</span> /month
              </div>
            </div>
            <div className="grid gap-2">
              <div className="font-medium">Features</div>
              <div className="text-muted-foreground">Basic</div>
            </div>
            <div className="grid gap-2">
              <div className="font-medium">Token Count</div>
              <div className="text-muted-foreground">
                <span className="text-primary font-bold">1,000,000</span> Tokens
              </div>
            </div>
            <div className="grid gap-2">
              <div className="font-medium">Price</div>
              <div className="text-muted-foreground">
                <span className="text-primary font-bold">₹10</span> /month
              </div>
            </div>
            <div className="grid gap-2">
              <div className="font-medium">Features</div>
              <div className="text-muted-foreground">Advanced</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  )
}

export default Billing


function XIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}