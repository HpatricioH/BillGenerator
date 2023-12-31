'use client'

import React, { useCallback, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useParams } from 'next/navigation'
import Loading from '@/app/core/utils/loading'
import { useGetABill } from '@/app/lib/hooks/useGetABill'
import { InvoiceServiceDetails } from '../InvoiceServiceDetails/InvoiceServiceDetails'
import { Button } from '@/app/core/utils/Button'



export default function  BillForm () {
  const session = useSession()
  const params = useParams()
  const { id } = params
  const { status } = session
  const { invoice } = useGetABill({ id }) 

  const handlePrintInvoice = useCallback(() => {
    window.print()
  }, [])

  const { 
    address, 
    city, 
    province, 
    postalCode, 
    phone, 
    billTo, 
    amount, 
    description, 
    numMonth,
    createdAt,
    quantity, 
    UnitPrice } = invoice as any

  if (status === "loading" || invoice.length === 0) {
    return <Loading />
  }

  return (
    <section className={`${invoice.length === 0 ? 'hidden' : 'bg-[#FFF] text-[#0f172a] w-full p-4 rounded-xl mb-24'}`}>
      <h1 className='text-center font-bold text-3xl pb-4'>Invoice</h1>
      <div className='pb-4'>
        <h2 className='font-bold text-xl'>{session.data?.user?.name}</h2>
        <p>{address}</p>
        <p>{city}, {province} {postalCode}</p>
      </div>

      <div className='pb-4'>
        <p>{phone}</p>
        <p>{session.data?.user?.email}</p>
      </div>
      
      <div className='flex justify-between pb-4'>
        <div className='w-[28rem]'>
          <p>{billTo}</p>
        </div>
        <div className='flex gap-4'>
          <p>Invoice #: 00001</p>
          <p>{new Date(createdAt).toLocaleDateString()}</p>
        </div>
      </div>

      <table className='mb-4 w-full'>
        <thead>
          <tr className='[&_th]:border [&_th]:p1 [&_th]:border-[#0f172a]'>
            <th>Description</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className='[&_td]:border [&_td]:p1 [&_td]:border-[#0f172a]'>
            <td className='pl-3'>{description}</td>
            <td className='text-center'>{quantity}</td>
            <td className='text-center'>${UnitPrice}</td>
            <td className='text-center'>${`${!UnitPrice ? '' : quantity*UnitPrice}`}</td>
          </tr>
        </tbody>
      </table>

      <p className='text-right pb-4'>Total: ${`${!UnitPrice ? '' : quantity*UnitPrice}`}</p>

      <div className='flex flex-col gap-2'>
        <h3 className='font-bold tracking-normal text-lg'>Service Details</h3>
        <InvoiceServiceDetails numMonth={numMonth}/>
      </div>

      <div className='text-xs font-bold tracking-wider text-end pt-4'>
        <Button onClick={handlePrintInvoice} className={'bg-opacity-0  group-hover:bg-opacity-20'}>Print</Button>
      </div>
    </section>
  )
}
