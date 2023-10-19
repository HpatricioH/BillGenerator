import { getServerSession } from "next-auth"
import { authOptions } from "@/auth/authOptions"
import { redirect } from 'next/navigation'

export default async function Home() {
  // Get user session 
  const session = await getServerSession( authOptions )

  if ( !session ) {
    redirect( '/api/auth/signin' )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 pb-24 bg-[#030712] text-[#fff]">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="left-0 top-0 flex w-full justify-center pb-6 pt-4 dark:border-neutral-800">Bill Generator</h1>
      </div>
    </main>
  )
}
