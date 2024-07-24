
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import prisma from '@/utils/prisma'

const ListofDonations = async() => {
    const donators = await prisma.payments.findMany()
  return (
    <>
     <Card>
      <CardHeader className="px-7">
        <CardTitle>Plantaions</CardTitle>
        <CardDescription>Recent Donators.</CardDescription>
      </CardHeader>
      <CardContent>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Plants</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
                donators.map((donat,index)=>(

                    <TableRow key={index}>
              <TableCell className="font-medium">{donat.name}</TableCell>
              <TableCell>{donat.email}</TableCell>
              <TableCell>{donat.amount}</TableCell>
              <TableCell>{donat.createdAt.toDateString()}</TableCell>
            </TableRow>
                ))
            }
          </TableBody>
        </Table>
      </CardContent>
    </Card>
    </>
  )
}

export default ListofDonations