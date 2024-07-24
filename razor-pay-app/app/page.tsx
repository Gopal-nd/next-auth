import ListofDonations from '@/components/ListofDonations'
import React from 'react'
import Payment from './create/page'

const Home = () => {
  return (
    <>
    <Payment />
    <center className='text-sm mt-20'>
      <h1>Card: 4111 1111 1111 1111</h1>
      <p>Expiry: 12/25</p>
      <p>CVV:123</p>
      <p>Otp:1111</p>
    </center>
    <section className='maz-w-xl flex flex-col gap-6 h-14 mx-5 sm:mx-10 2xl:mx-auto 2xl:w-[1400px] items-center pt-36'>

   <ListofDonations />
   </section></>
  )
}

export default Home