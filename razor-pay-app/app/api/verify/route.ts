import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import prisma from '@/utils/prisma';

const generatedSignature = (
    orderCreationId: string,
 razorpayPaymentId: string
) => {
 const keySecret = process.env.RAZORPAY_KEY_SECRET;
 if (!keySecret) {
  throw new Error(
   'Razorpay key secret is not defined in environment variables.'
  );
 }
 const sig = crypto
  .createHmac('sha256', keySecret)
  .update(orderCreationId + '|' + razorpayPaymentId)
  .digest('hex');
 return sig;
};


export async function POST(request: NextRequest) {
 const { orderCreationId, razorpayPaymentId, razorpaySignature } =
  await request.json();

 const signature = generatedSignature(orderCreationId, razorpayPaymentId);

 if (signature !== razorpaySignature) {
  return NextResponse.json(
   { message: 'payment verification failed', isOk: false },
   { status: 400 }
  );
 }
 const user = await prisma.payments.update({
    data:{
        orderCreationId:orderCreationId,
        razorpayPaymentId:razorpayPaymentId,
        razorpaySignature:razorpaySignature
    },
    where:{
        orederId:orderCreationId
    }
})
console.log(user)
 return NextResponse.json(
  { message: 'payment verified successfully', isOk: true,signature:signature },
  { status: 200 }
 );
}