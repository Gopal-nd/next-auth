
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useUser } from "@clerk/nextjs"

import { Button } from "@/components/ui/button";
import prisma from "@/utils/db";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
export default async function History() {
  const user =await currentUser()
  const email:string|any = user?.primaryEmailAddress?.emailAddress
  console.log(email)
  const list = await prisma.aiResponse.findMany({
    where:{
      email:email,
    }
  })

  return (
    <div className="border rounded-lg w-full">
        <center className=" p-5 my-2 text-2xl">Your History </center>
      <div className="relative w-full overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Query</TableHead>
              <TableHead className="">Result Lenght</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Count</TableHead>
              <TableHead className="text-right">View</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              email &&list.map((list)=>(
                <TableRow key={list.id}>
              <TableCell className="font-medium">{list.prompt?.slice(10)}...</TableCell>
              <TableCell className="">{list.response?.length}</TableCell>
              <TableCell>{list.createdAt.toLocaleDateString()}</TableCell>
              <TableCell>{list.templetName?.slice(10)}...</TableCell>
              <TableCell className="text-right">
                  <Link href={`/history/${list.id}`}>
                <Button>view</Button>
                </Link>
              </TableCell>
            </TableRow>
              ))
            }

          </TableBody>
        </Table>
      </div>
    </div>
  )
}

