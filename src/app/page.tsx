import { getServerSession } from "next-auth"
import { authOptions } from "@/auth/authOptions"

export default async function Home() {
  // Get user session 
  const session = await getServerSession( authOptions )
  console.log(session);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {session && (
          <p className="fixed left-0 top-0 flex w-full justify-center  pb-6 pt-8 dark:border-neutral-800 ">
            <span className="hidden lg:inline-block">Bill Generator</span>
          </p>
        )}

        {!session && (
          <p className="fixed left-0 top-0 flex w-full justify-center  pb-6 pt-8 dark:border-neutral-800 ">
            <span className="hidden lg:inline-block">Not Signed in</span>
          </p>
        )}
      </div>
    </main>
  )
}
