import { Button } from '@/app/core/utils/Button'
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submitted')
    setInvoiceModal(false)
  }

  const companyInputs = [
    {
      label: 'City',
      type: 'text',
    },
    {
      label: 'Province',
      type: 'text',
    },
    {
      label: 'Postal Code',
      type: 'text',
    },
    {
      label: 'Phone Number',
      type: 'tel',
    }
  ]

  const billInputs = [
    {
      label: 'Description',
      type: 'text',
    },
    {
      label: 'Quantity',
      type: 'number',
    },
    {
      label: 'Unit Price',
      type: 'number',
    },
    {
      label: 'Amount',
      type: 'number',
    }
  ]

  return (
    <section
      id='InvoiceModal'
      className='p-4 z-20 fixed inset-0 flex justify-center items-center transition duration-700 ease-in-out'
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => { handleClose(e) }}>
      <div className='absolute top-[3.5rem] bg-[#111827] rounded-2xl shadow-lg shadow-[#1e293b] p-8'>
        <h1 className='font-bold uppercase tracking-wider text-center text-2xl'>Invoice Preferences</h1>
        <p className='text-center'>Add your invoice preferences in order to make them appear in the invoice details</p>
        
        <h2 className='font-bold text-xl py-4 tracking-wide'>Company Details:</h2>
        <form onClick={(e) => handleSubmit(e)} className='flex flex-col gap-1'>
          <label>Address:</label>
          <input className='text-black' type="text" />
          <div className='flex gap-4 '>
            {companyInputs.map((input, index) => {
              return (
                <div className='flex flex-col' key={index}>
                  <label>{input.label}</label>
                  <input className='text-black' type={input.type} />
                </div>
              )
            })}
          </div>
          <h2 className='font-bold text-xl py-4 tracking-wide'>Services Provided to:</h2>
          <label>Bill To:</label>
          <input className='text-black' type="text" />
          <div className='flex gap-4'>
            {billInputs.map((input, index) => {
              return (
                <div className='flex flex-col' key={index}>
                  <label>{input.label}</label>
                  <input className='text-black' type={input.type} />
                </div>
              )
            })}
          </div>
          <div className='flex justify-center pt-6'>
            <Button>Save Changes</Button>
          </div>
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
