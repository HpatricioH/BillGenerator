import prisma from '@/app/lib/db/db'
import { NextResponse } from 'next/server'

export const POST = async () => {
  try {
    const invoiceMonth = new Date().getMonth() - 1
    const month = new Date().getMonth() - invoiceMonth
    const year = new Date().getFullYear()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } as const
    const fridays: string[] = []
    const userId = process.env.USER_ID
    const url = process.env.NEXT_PUBLIC_URL

    // get all fridays of the month 
    for (let day = firstDay; day <= lastDay; day.setDate(day.getDate() + 1)) {
      if (day.getDay() === 5) {
        fridays.push(new Intl.DateTimeFormat('en-US', options).format(day))
      }
    }

    // get user by id 
    const user = await fetch (`${url}/api/users/${userId}`);
    const userData = await user.json()

    if (userData.id) {
      const bill =  await prisma.bill.create({
        data: {
          address: process.env.BILL_ADDRESS || 'default address',
          city: process.env.BILL_CITY || 'default city',
          province: process.env.BILL_PROVINCE || 'default province',
          postalCode: process.env.BILL_POSTAL_CODE || 'default postal code',
          phone: process.env.BILL_PHONE || 'default phone',
          billTo: process.env.BILL_BILL_TO || 'default bill to',
          description: process.env.BILL_DESCRIPTION || 'default description',
          quantity: fridays.length,
          UnitPrice: 100,
          numMonth: invoiceMonth,
          amount: fridays.length * 100, 
          createdAt: new Date(),
          userId: userData.id
        }
      })

      return NextResponse.json(bill, {status: 200})
    } else {
      return NextResponse.json({ message: 'User not found'}, {status: 404})
    }

  } catch (error: any ) {
    return NextResponse.json({ message: 'AutoBill Error', error: error.message}, {status: 500})
  }
}