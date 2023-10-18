'use client'
import React, { useState } from 'react'
import { useSession, signOut } from "next-auth/react"
import Image from 'next/image'



export function Header() {
  const [userModal, setUserModal] = useState(false)
  const session = useSession()
  const { status } = session
  console.log(session)

  if (status === "loading") {
    return <p>Loading...</p>
  }

  const handleShowUserModal = () => {
    !userModal ? setUserModal(true) : setUserModal(false)
  }

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement
    if (target.id === 'modal') {
      setUserModal(false)
    }
  }

  return (
    <header className='p-4'>
      <nav className='flex gap-4 justify-end'>
        <ul className='flex flex-col-reverse justify-center items-center'>
          <li onClick={handleShowUserModal} className='cursor-pointer'>
            <Image src={session.data?.user?.image || ''} alt='user image' width={50} height={50} className='rounded-full'/>
          </li>
        </ul>
      </nav>
      {userModal && (
        <section 
          id='modal'
          className='bg-[#20212C] p-4 z-20 fixed inset-0 bg-opacity-60 flex justify-center items-center transition duration-700 ease-in-out' 
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {handleClose(e)}}>
          <div className='absolute top-20 right-10 w-72 h-72 bg-[#111827] rounded-2xl shadow-lg shadow-[#1e293b] p-4'>
            <ul className='flex flex-col justify-center items-center gap-3'>
              <li>
                <p>{session.data?.user?.email}</p>
              </li>
              <li>
                <Image src={session.data?.user?.image || ''} alt='user image' width={100} height={100} className='rounded-full'/>
              </li>
              <li>
                <p>Hi, {session.data?.user?.name?.split(" ",1)}!</p>
              </li>
              <li>
                <button onClick={() => signOut()}  type="button" className='pt-4'>Sign Out</button>
              </li>
            </ul>
          </div>
        </section>
      )}
    </header>
  )
}
