// url: http://localhost:3000/api/bill
import prisma from '@/app/lib/db/db'
import { NextResponse } from 'next/server'

const dataError = [{
  message: 'Address is required',
  internal_code: 'missing_address'
}, {
  message: 'City is required',
  internal_code: 'missing_city'
}, {
  message: 'Province is required',
  internal_code: 'missing_province'
}, {
  message: 'Postal Code is required',
  internal_code: 'missing_postalCode'
}, {
  message: 'Phone is required',
  internal_code: 'missing_phone'
}, {
  message: 'Bill To is required',
  internal_code: 'missing_billTo'
}, {
  message: 'Description is required',
  internal_code: 'missing_description'
}, {
  message: 'Quantity is required',
  internal_code: 'missing_quantity'
}, {
  message: 'Unit Price is required',
  internal_code: 'missing_unitPrice'
}, {
  message: 'Amount is required',
  internal_code: 'missing_amount'
}, {
  message: 'User Id is required',
  internal_code: 'missing_userId'
},{
  message: 'Month number is required',
  internal_code: 'missing_numMonth'
}
]

// create a bill
export const POST = async (req: any) => {
  try {
    const body = await req.json()
    const { 
      address, 
      city, 
      province, 
      postalCode, 
      phone, 
      billTo, 
      description, 
      quantity, 
      UnitPrice,
      numMonth, 
      amount, 
      userId } = body
    
    switch (true) {
      case !address:
        return NextResponse.json(dataError[0], {status: 400})
      case !city: 
        return NextResponse.json(dataError[1], {status: 400})
      case !province:
        return NextResponse.json(dataError[2], {status: 400})
      case !postalCode:
        return NextResponse.json(dataError[3], {status: 400})
      case !phone:
        return NextResponse.json(dataError[4], {status: 400})
      case !billTo:
        return NextResponse.json(dataError[5], {status: 400})
      case !description:
        return NextResponse.json(dataError[6], {status: 400})
      case !quantity:
        return NextResponse.json(dataError[7], {status: 400})
      case !UnitPrice:
        return NextResponse.json(dataError[8], {status: 400})
      case !amount:
        return NextResponse.json(dataError[9], {status: 400})
      case !userId:
        return NextResponse.json(dataError[10], {status: 400})
      case !numMonth:
        return NextResponse.json(dataError[11], {status: 400})
    }

    const bill = await prisma.bill.create({
      data: {
        address,
        city,
        province,
        postalCode,
        phone,
        billTo,
        description,
        quantity,
        UnitPrice,
        numMonth,
        amount,
        createdAt: new Date(),
        userId
      }
    })

    return NextResponse.json(bill, {status: 201})
    
  } catch (error: any) {
    return NextResponse.json({ message: "Bill Error", error: error.message}, {status: 500})
  }
}
