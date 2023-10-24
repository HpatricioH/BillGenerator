import { getServerSession } from "next-auth"
import { authOptions } from "@/auth/authOptions"
import { redirect } from 'next/navigation'
import BillForm from "./components/BillForm/BillForm"

export default async function Home() {
  // Get user session 
  const session = await getServerSession( authOptions )

  if ( !session ) {
    redirect( '/api/auth/signin' )
    return null
  }

  return (
    <main className="flex flex-col min-h-screen items-center justify-between px-4 bg-[#030712] dark:text-[#fff]">
      <div className="z-10 max-w-5xl w-full text-sm lg:flex">
        <BillForm/>
      </div>
    </main>
  )
}
