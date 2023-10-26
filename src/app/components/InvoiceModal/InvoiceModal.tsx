import addNewBill from '@/app/core/services/addNewBill'
import { Button } from '@/app/core/utils/Button'
import { billInputs, companyInputs } from '@/app/core/utils/formInputs'
import { InvoiceModalProps } from '@/app/lib/types/invoiceModal'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useState } from 'react'


export function InvoiceModal({setInvoiceModal}: InvoiceModalProps) {
  const [errorData, setErrorData] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const session = useSession()
  const { id } = session?.data?.user as { id: ''}

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement
    if (target.id === 'InvoiceModal') {
      setInvoiceModal(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // get all form data 
    const form = e.currentTarget
    const formData = new FormData(form)
    const { address, city, province, postalCode, phoneNumber, description, quantity, UnitPrice, amount, billTo } = Object.fromEntries(formData)
    
    // validations for form data 
    if (!city || !province || !postalCode || !phoneNumber || !description || !quantity || !UnitPrice || !amount || !address || !billTo) {
      setErrorData(true)
      return setErrorMsg('Please fill out all fields')
    } 

    // if form data is valid, submit data to the db 
    if(city && province && postalCode && phoneNumber && description && quantity && UnitPrice && amount && address && billTo) {
      await addNewBill({address, city, province, postalCode, phone: phoneNumber, billTo, description, quantity, UnitPrice, amount, userId:id})
      form.reset()
      setErrorData(false)
    } else {
      setErrorData(true)
      return setErrorMsg('Something went wrong, please try again')
    }
    setInvoiceModal(false)
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
        {errorData && <p className='text-red-500 text-center'>{errorMsg}</p>}

        <form onSubmit={(e) => handleSubmit(e)} className={`flex flex-col gap-1 ${errorData ? '[&_input]:border [&_input]:border-red-500': ''}`}>
          <label>Address:</label>
          <input className='text-black' type="text" id='address' name='address'/>
          <div className='flex gap-4 '>
            {companyInputs.map((input, index) => {
              return (
                <div className='flex flex-col' key={index}>
                  <label>{input.label}</label>
                  <input className='text-black' type={input.type} id={input.id} name={input.name} />
                </div>
              )
            })}
          </div>

          <h2 className='font-bold text-xl pt-6 pb-2 tracking-wide'>Services Provided to:</h2>
          <label>Bill To:</label>
          <input className='text-black' type="text" id='billTo' name='billTo'/>
          <div className='flex gap-4'>
            {billInputs.map((input, index) => {
              return (
                <div className='flex flex-col' key={index}>
                  <label>{input.label}</label>
                  <input className='text-black' type={input.type} id={input.id} name={input.name}/>
                </div>
              )
            })}
          </div>

          <div className='flex justify-center pt-6'>
            <Button type="submit">Save Changes</Button>
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
