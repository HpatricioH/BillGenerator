import { Button } from '@/app/core/utils/Button'
import { billInputs, companyInputs } from '@/app/core/utils/formInputs'
import { invoiceSchema } from '@/app/lib/schemas/billSchemas'
import { type ZodError } from 'zod';
import React, { useState } from 'react'


export function InvoiceModal() {
  const [errorData, setErrorData] = useState(false)
  const [errorField, setErrorField] = useState('');
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // get all form data 
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    // parse quantity, UnitPrice, and amount as numbers
    const parsedData = {
      ...data,
      quantity: Number(data.quantity),
      UnitPrice: Number(data.UnitPrice),
      amount: Number(data.amount),
      numMonth: new Date().getMonth(),
      userId: id
    };

    if (parsedData.amount) {
      // clear old error message
      setErrorData(false)
      setErrorMsg('')
      setErrorField('')
    }

    try {
      const data = invoiceSchema.parse(parsedData)
      console.log(data);
      // if form data is valid
    } catch (error) {
      const zodError = error as ZodError;
      setErrorData(true)
      setErrorMsg(zodError?.errors[0]?.message ?? '')
      setErrorField(zodError?.errors[0]?.path[0]?.toString() ?? '')
    }

    // if form data is valid, submit data to the db 
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
