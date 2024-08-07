import { Button } from '@/app/core/utils/Button'
import { billInputs, companyInputs } from '@/app/core/utils/formInputs'
import { invoiceSchema } from '@/app/lib/schemas/billSchemas'
import { type ZodError } from 'zod';
import React, { useState } from 'react'
import { errorToastHandler, successToastHandler } from '@/app/core/utils/toastHandler';
import { api } from '@/trpc/react';
import { useRouter } from 'next/navigation';

interface InvoiceData {
  description: string;
  quantity: number;
  UnitPrice: number;
  amount: number;
  billTo: string;
  userId: string; // Add 'userId' property
  address: string;
  city: string;
  province: string;
  postalCode: string;
  phone: string;
  numMonth: number;
}

interface InvoceModalProps {
  setShowModal: (value: boolean) => void
}

export function InvoiceModal(props: InvoceModalProps) {
  const [errorData, setErrorData] = useState(false)
  const [errorField, setErrorField] = useState('');
  const [errorMsg, setErrorMsg] = useState('')
  const router = useRouter()

  const createBill = api.bill.createBill.useMutation()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // get all form data 
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    // parse the date and extract the month
    const numMonth: number = new Date().getMonth() - 1;

    // parse userId, quantity, UnitPrice, and amount
    const quantity = Number(data.quantity);
    const UnitPrice = Number(data.UnitPrice);
    const amount = Number(quantity * UnitPrice);

    const parsedData = {
      ...data,
      quantity,
      UnitPrice,
      amount,
    };

    if (parsedData.amount) {
      // clear old error message
      setErrorData(false)
      setErrorMsg('')
      setErrorField('')
    }


    try {
      const validatedData = invoiceSchema.parse(parsedData) as InvoiceData;
      const { description, quantity, UnitPrice, amount, billTo, address, city, province, postalCode, phone } = validatedData;

      // if form data is valid
      createBill.mutate({
        description, quantity, UnitPrice, amount, billTo, address, city, province, postalCode, phone, numMonth
      }, {
        onSuccess: () => {
          successToastHandler({ message: 'Bill created successfully!' })
          router.refresh()
          props.setShowModal(false)
        }, onError: () => {
          errorToastHandler({ message: 'Bill not created!' })
          props.setShowModal(false)
        }
      })
    } catch (error) {
      const zodError = error as ZodError;
      setErrorData(true)
      setErrorMsg(zodError?.errors[0]?.message ?? '')
      setErrorField(String(zodError?.errors[0]?.path[0]) ?? '')
    }
  }

  return (
    <section
      className='p-4 inset-0 flex justify-center items-center'
    >
      <div className='p-8'>
        <h1 className='font-bold uppercase tracking-wider text-center text-2xl'>Invoice Preferences</h1>
        <p className='text-center'>Add your invoice preferences in order to make them appear in the invoice details</p>

        <h2 className='font-bold text-xl py-2 tracking-wide'>Company Details:</h2>
        {errorData && <p className='text-red-500 text-center'>{errorMsg}</p>}

        <form onSubmit={(e) => handleSubmit(e)} className={`flex flex-col gap-1`}>
          <label className='form-control w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'>Address:</span>
            </div>
            <input
              type='text'
              id='address'
              name='address'
              placeholder='Type here'
              className={`input input-sm w-full max-w-xs ${errorField === 'address' ? 'input-error' : ''}`} />
          </label>
          <div className='flex gap-4 '>
            {companyInputs.map((input, index) => {
              return (
                <label className='flex flex-col form-control w-full max-w-xs' key={index}>
                  <div className='label'>
                    <span className='label-text'>{input.label}</span>
                  </div>
                  <input
                    type={input.type}
                    id={input.id}
                    name={input.name}
                    placeholder='Type here'
                    className={`input input-sm w-full max-w-xs ${errorField === input.name ? 'input-error' : ''}`} />
                </label>
              )
            })}
          </div>

          <h2 className='font-bold text-xl pt-6 pb-2 tracking-wide'>Services Provided to:</h2>
          <label className='form-control w-full max-w-xs'>
            <div className='label'>
              <span className='label-text'>Bill To:</span>
            </div>
            <input
              type='text'
              id='billTo'
              name='billTo'
              placeholder='Type here'
              className={`input input-sm w-full max-w-xs ${errorField === 'billTo' ? 'input-error' : ''}`} />
          </label>

          <div className='flex gap-4'>
            {billInputs.map((input, index) => {
              return (
                <label className='flex flex-col form-control w-full max-w-xs' key={index}>
                  <div className='label'>
                    <span className='label-text'>{input.label}</span>
                  </div>
                  <input
                    type={input.type}
                    id={input.id}
                    name={input.name}
                    placeholder='Type here' className
                    ={`input input-sm w-full max-w-xs ${errorField === input.name ? 'input-error' : ''}`} />
                </label>
              )
            })}
          </div>

          <div className='flex justify-center pt-6'>
            <Button type="submit">Save Changes</Button>
          </div>

        </form>
      </div>
    </section>
  )
}
