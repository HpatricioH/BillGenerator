import React from 'react'
import Image from 'next/image'
import { MenuModalProps } from '../../lib/types/header'
import { Button } from '@/app/core/utils/Button'


export function MenuModal({setUserModal, email, image, name, signOut, invoiceModal, setInvoiceModal}: MenuModalProps) {
    
  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement
    if (target.id === 'modal') {
      setUserModal(false)
    }
  }

  const handleInvoiceModal = () => {
    !invoiceModal ? setInvoiceModal(true) : setInvoiceModal(false)
    setUserModal(false)
  }

  return (
    <section
      id='modal'
      className='p-4 z-20 fixed inset-0 flex justify-center items-center transition duration-700 ease-in-out'
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => { handleClose(e) }}>
      <div className='absolute top-[4rem] right-10 w-72  bg-[#111827] rounded-2xl shadow-lg shadow-[#1e293b] p-4'>
        <ul className='flex flex-col justify-center items-center gap-3'>
          <li>
            <p>{email}</p>
          </li>
          <li>
            <Image src={image || ''} alt='user image' width={100} height={100} className='rounded-full' />
          </li>
          <li>
            <p>Hi, {name?.split(" ", 1)}!</p>
          </li>
          <li>
            <Button onClick={handleInvoiceModal}>Invoice Info</Button>
          </li>
          <li>
            <Button onClick={() => signOut()}>Sign Out</Button>
          </li>
        </ul>
        <Image
          src={'/icons/icon-cross.svg'}
          alt='close cross icon'
          width={20}
          height={20}
          className='absolute top-4 right-4 cursor-pointer  hover:opacity-50'
          onClick={() => setUserModal(false)}
        />
      </div>
    </section>
  )
}
