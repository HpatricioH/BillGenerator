'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useSession, signOut } from "next-auth/react"

export default function Navbar() {
  const session = useSession()

  return (
    <nav className="navbar bg-dark-primary">
      <div className="flex-1">
        <Link href='/' className='flex'>
          <Image
            src='/images/logo.png'
            alt='logo'
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn  btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image
                src={session?.data?.user?.image ?? '/images/person-fill.svg'}
                alt='user image'
                width={50}
                height={50}
                className='rounded-xl' />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content w-52 border border-white/10 bg-dark-primary gap-2">
            <li><Link href="/"> Home </Link></li>
            <li>
              <Link href="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className='btn btn-sm bg-dark-primary' onClick={() => signOut()}>Logout</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}