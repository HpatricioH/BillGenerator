import prisma from '@/app/lib/db/db'
import { NextResponse } from 'next/server'


// get one bill by id params 
export const GET = async (req: any, {params}: any) => {
  try {
    const id = params.id

    const bill = await prisma.bill.findUnique({
      where: {
        id: id
      }
    })

    if (!bill) {
      return NextResponse.json({ message: "Bill not found"}, {status: 404})
    }

    return NextResponse.json(bill, {status: 200})

  } catch (error: any) {
    return NextResponse.json({ message: "Bill Error", error: error.message}, {status: 500})    
  }
}