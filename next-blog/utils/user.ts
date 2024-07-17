import NextAuth, { getServerSession } from "next-auth/next"
import { authOptions } from "./db"
import { GoogleProfile } from "next-auth/providers/google";
import { OAuthConfig } from "next-auth/providers/oauth";
import { Adapter } from "next-auth/adapters";


export const GetUser=async()=>{
    const auth:any= authOptions
    const session:any =await getServerSession(auth)
  
    return session?.user

}