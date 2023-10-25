// url: http://localhost:3000/api/users
import prisma from '@/app/lib/db/db'
import { NextResponse } from 'next/server'

// create a user
export const POST = async (req: any) => {
  try {
    const body = await req.json()
    const { name, email } = body

    const user = await prisma.user.create({
      data: {
        name,
        email,
      }
    })

    return NextResponse.json(user, {status: 201})

  } catch (e: any) {
   return NextResponse.json({ message: "User Error", error:e.message}, {status: 500}) 
  }
}

