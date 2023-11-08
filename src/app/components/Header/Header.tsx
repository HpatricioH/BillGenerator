'use client'
import React, { useState } from 'react'
import { useSession, signOut } from "next-auth/react"
import Image from 'next/image'
import { MenuModal } from '../MenuModal/MenuModal'
import { InvoiceModal } from '../InvoiceModal/InvoiceModal'
import Link from 'next/link'



export function Header() {
  const [userModal, setUserModal] = useState(false)
  const [invoiceModal, setInvoiceModal] = useState(false)
  const session = useSession()
  const { status } = session
  const { email, image, name } = session?.data?.user || { name: '', email: '', image: '' }


  const handleShowUserModal = () => {
    !userModal ? setUserModal(true) : setUserModal(false)
  }

  return (
    <header className={`${status === 'loading' ? 'hidden' : 'p-4 bg-[#030712] text-[#fff] print:hidden'}`}>
      <nav className='flex gap-4 justify-end'>
        <ul className='flex flex-row w-full'>
          <li className='flex-1 cursor-pointer'>
            <Link href='/' className='flex'>
              <Image
                src='/images/logo.png'
                alt='logo'
                width={50}
                height={50}
              />
              <p className='flex items-center uppercase font-bold tracking-widest'>Invoice Generator</p>
            </Link>
          </li>
          <li onClick={handleShowUserModal} className='cursor-pointer flex-2 pt-[0.3rem]'>
            <Image
              src={session?.data?.user?.image || '/images/person-fill.svg'}
              alt='user image'
              width={50}
              height={50}
              className='rounded-xl' />
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
          invoiceModal={invoiceModal}
          setInvoiceModal={setInvoiceModal}
        />
      )}
      {invoiceModal && (
        <InvoiceModal
          setInvoiceModal={setInvoiceModal}
          invoiceModal={invoiceModal}
        />
      )}
    </header>
  )
}
