'use client'
import React, { useState } from 'react'
import { useSession, signOut } from "next-auth/react"
import Image from 'next/image'
import { MenuModal } from '../MenuModal/MenuModal'



export function Header() {
  const [userModal, setUserModal] = useState(false)
  const session = useSession()
  const { status } = session
  const {email, image, name} = session?.data?.user || { name: '', email: '', image: '' }

  if (status === "loading") {
    return <p className='bg-[#030712] dark:text-[#fff]'>Loading...</p>
  }

  const handleShowUserModal = () => {
    !userModal ? setUserModal(true) : setUserModal(false)
  }

  return (
    <header className='p-4 bg-[#030712] text-[#fff] '>
      <nav className='flex gap-4 justify-end'>
        <ul className='flex flex-col-reverse justify-center items-center'>
          <li onClick={handleShowUserModal} className='cursor-pointer'>
            <Image src={session.data?.user?.image || ''} alt='user image' width={50} height={50} className='rounded-full' />
          </li>
        </ul>
      </nav>
      {userModal && (
        <MenuModal 
          setUserModal={setUserModal}
          email={email || ''}
          image={image || ''}
          name={name || ''}
          signOut={() => signOut()}
        />
      )}
    </header>
  )
}
