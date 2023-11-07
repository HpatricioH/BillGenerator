// url: http://localhost:3000/api/users/[id]
import prisma from '@/app/lib/db/db'
import { NextResponse } from 'next/server'

// get one user by id 

export const GET = async (req: any, {params}: any) => {
  try {
    const id = params.id 

    const user = await prisma.user.findUnique({
      where: {
        id: id
      }
    })

    if (!user) {
      return NextResponse.json({ message: 'User not found'}, {status: 404})
    }

    return NextResponse.json(user, {status: 200})
    
  } catch (error: any) {
    return NextResponse.json({ message: 'User Error', error: error.message}, {status: 500})
  }
}