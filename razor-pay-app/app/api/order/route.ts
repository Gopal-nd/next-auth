import Razorpay from 'razorpay';
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

const razorpay = new Razorpay({
 key_id: process.env.RAZORPAY_KEY_ID??'',
 key_secret: process.env.RAZORPAY_KEY_SECRET??'',
});

export async function POST(request: NextRequest) {
 const { amount, currency,name ,email} = (await request.json()) as {
  amount: string;
  currency: string;
  name:string;
  email:string
 };

 var options = {
  amount: amount,
  currency: currency,
  receipt: 'rcp1',
 };
 const order = await razorpay.orders.create(options);
 console.log(order);
 const res =await prisma.payments.create({
    data:{
        amount:parseInt(amount)/100,
        name:name,
        orederId:order.id,
        email:email
    }
 })
 return NextResponse.json({ orderId: res.orederId }, { status: 200 });
}