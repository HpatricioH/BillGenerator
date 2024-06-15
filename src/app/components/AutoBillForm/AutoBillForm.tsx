'use client'

import { Button } from "@/app/core/utils/Button"
import { autoBillInputs, companyInputs } from "@/app/core/utils/formInputs"
import { useState } from "react"

interface AutoBillFormProps {
  setShowAutoBillModal: (value: boolean) => void
}

export default function AutoBillForm(props: AutoBillFormProps) {
  const [errorData, setErrorData] = useState(false)
  const [errorField, setErrorField] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  return (
    <section
      className='p-4 inset-0 flex justify-center items-center'
    >
      <div className='p-8'>
        <h1 className='font-bold uppercase tracking-wider text-center text-2xl'>Invoice Preferences</h1>
        <p className='text-center'>Add your invoice preferences in order to make them appear in the invoice details</p>

        <h2 className='font-bold text-xl py-2 tracking-wide'>Company Details:</h2>
        {errorData && <p className='text-red-500 text-center'>{errorMsg}</p>}

        <form className={`flex flex-col gap-1`}>
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
            {autoBillInputs.map((input, index) => {
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