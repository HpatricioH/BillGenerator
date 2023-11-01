import prisma from '@/app/lib/db/db'
import { NextResponse } from 'next/server'

// get all bills by user id
export const GET = async (req: any, {params}: any) => {
  try {
    const id = params.id
    
    const bills = await prisma.bill.findMany({
      where: {
        userId: id
      }
    })
    
    if (!bills) {
      return NextResponse.json({ message: "Bills not found"}, {status: 404})
    }

    return NextResponse.json(bills, {status: 200})

  } catch (error: any) {
    return NextResponse.json({ message: "Get All Bills Error", error: error.message}, {status: 500})
  }
}