import { authOptions } from "@/utils/db"
import NextAuth from "next-auth/next"
const auth:any= authOptions;
const handler = NextAuth(auth)

export { handler as GET, handler as POST }