import { getServerSession } from "next-auth"
import { authOptions } from "@/auth/authOptions"
import { redirect } from 'next/navigation'
import BillCards from "./components/BillCards/BillCards"

export default async function Home() {
  // Get user session 
  const session = await getServerSession( authOptions )

  if ( !session ) {
    redirect( '/api/auth/signin' )
  }

  return (
    <main className="flex flex-col min-h-screen items-center justify-between px-4 bg-[#030712] text-[#fff]">
      <div className="z-10 max-w-5xl w-full text-sm lg:flex">
        <BillCards />
      </div>
    </main>
  )
}
