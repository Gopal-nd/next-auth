import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";

import { PrismaClient } from "@prisma/client"
import prisma from "./prisma";
 

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID !,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET !
          })
    ],
    secret:'secret'
}
  

