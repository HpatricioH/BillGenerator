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


// get all bills by user id
export const GET_ALL = async (req: any, {params}: any) => {
  try {
    const id = params.id

    console.log(id);
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