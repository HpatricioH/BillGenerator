import { authOptions } from "@/server/auth";
import { getServerSession } from "next-auth"
import Navbar from "../Navbar/Navbar";

export async function Header() {
  const session = await getServerSession(authOptions)

  return (
    <header className='px-4 bg-dark-primary text-white sticky top-0 w-full pt-4 duration-300 z-50'>
      <div className='flex container pl-4 pr-4 items-center justify-between mx-auto'>
        <Navbar image={session?.user.image} />
      </div>
    </header>
  )
}
