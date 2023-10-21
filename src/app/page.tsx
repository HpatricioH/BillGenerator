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
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        {/* <h1 className="left-0 top-0 flex w-full justify-center pb-6 pt-4 dark:border-neutral-800">Bill Generator</h1> */}
        <BillForm/>
      </div>
    </main>
  )
}
