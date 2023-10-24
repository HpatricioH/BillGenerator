import { InvoiceModalProps } from '@/app/lib/types/invoice.Modald'
import Image from 'next/image'
import React from 'react'


export function InvoiceModal({setInvoiceModal}: InvoiceModalProps) {
  
  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement
    if (target.id === 'InvoiceModal') {
      setInvoiceModal(false)
    }
  }

  return (
    <section
      id='InvoiceModal'
      className='p-4 z-20 fixed inset-0 flex justify-center items-center transition duration-700 ease-in-out'
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => { handleClose(e) }}>
      <div className='absolute top-[3.5rem] bg-[#111827] rounded-2xl shadow-lg shadow-[#1e293b] p-8'>
        <h1 className='font-bold uppercase tracking-wider text-center text-2xl'>Invoice Preferences</h1>
        <p className='text-center'>Add your invoice preferences in order to make them appear in the invoice details</p>
        
        <h2 className='font-bold text-xl py-4 tracking-wide'>Company Details:</h2>
        <form action="" className='flex flex-col gap-1'>
          <label>Address:</label>
          <input type="text" />
          <div className='flex gap-4'>
            <div className='flex flex-col'>
              <label>City:</label>
              <input type="text" />
            </div>
            <div  className='flex flex-col'>
              <label>Province:</label>
              <input type="text" />
            </div>
            <div className='flex flex-col'>
              <label>Postal Code:</label>
              <input type="text" />
            </div>
            <div className='flex flex-col'>
              <label>Phone Number:</label>
              <input type="text" />
            </div>
          </div>
          <h2 className='font-bold text-xl py-4 tracking-wide'>Services Provided to:</h2>
          <label>Bill To:</label>
          <input type="text" />
        </form>
        <Image
          src={'/icons/icon-cross.svg'}
          alt='close cross icon'
          width={20}
          height={20}
          className='absolute top-4 right-4 cursor-pointer  hover:opacity-50'
          onClick={() => setInvoiceModal(false)}
        />
      </div>
    </section>
  )
}
