'use client'
import React, { useState } from 'react'
import { useSession, signOut } from "next-auth/react"
import Image from 'next/image'



export function Header() {
  const [userModal, setUserModal] = useState(false)
  const session = useSession()
  const { status } = session

  if (status === "loading") {
    return <p className='bg-[#030712] dark:text-[#fff]'>Loading...</p>
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
  // TODO: separate modal into a different component. add an icon 'X' to close the modal too. 
  return (
    <header className='p-4 bg-[#030712] text-[#fff]'>
      <nav className='flex gap-4 justify-end'>
        <ul className='flex flex-col-reverse justify-center items-center'>
          <li onClick={handleShowUserModal} className='cursor-pointer'>
            <Image src={session.data?.user?.image || ''} alt='user image' width={50} height={50} className='rounded-full' />
          </li>
        </ul>
      </nav>
      {userModal && (
        <section
          id='modal'
          className='p-4 z-20 fixed inset-0 flex justify-center items-center transition duration-700 ease-in-out'
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => { handleClose(e) }}>
          <div className='absolute top-20 right-10 w-72 h-72 bg-[#111827] rounded-2xl shadow-lg shadow-[#1e293b] p-4'>
            <ul className='flex flex-col justify-center items-center gap-3'>
              <li>
                <p>{session.data?.user?.email}</p>
              </li>
              <li>
                <Image src={session.data?.user?.image || ''} alt='user image' width={100} height={100} className='rounded-full' />
              </li>
              <li>
                <p>Hi, {session.data?.user?.name?.split(" ", 1)}!</p>
              </li>
              <li>
                <button onClick={() => signOut()} type="button" className='relative inline-flex mt-4 items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800'>
                  <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>Sign Out</span>
                </button>
              </li>
            </ul>
            <Image
              src={'/icons/icon-cross.svg'}
              alt='close cross icon'
              width={20}
              height={20}
              className='absolute top-4 right-4 cursor-pointer  hover:opacity-50'
              onClick={handleShowUserModal}
            />
          </div>
        </section>
      )}
    </header>
  )
}
