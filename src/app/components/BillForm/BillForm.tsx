'use client'

import React, { useCallback, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useParams } from 'next/navigation'
import getBill from '@/app/core/services/getBill'
import Loading from '@/app/core/utils/loading'
import { useGetABill } from '@/app/lib/hooks/useGetABill'

const year = new Date().getFullYear()
const month = new Date().getMonth()
const day = new Date().getDate()

export default function  BillForm () {
  const session = useSession()
  const params = useParams()
  const { id } = params
  const { status } = session
  const { invoice } = useGetABill({ id }) 
  
  const { 
    address, 
    city, 
    province, 
    postalCode, 
    phone, 
    billTo, 
    amount, 
    description, 
    quantity, 
    UnitPrice } = invoice as any
  const currentDate = year +"/" +month +"/" +day

  if (status === "loading" && !invoice.length) {
    return <Loading />
  }

  return (
    <section className={`${status === 'loading' && !invoice.length ? 'hidden' : 'bg-[#FFF] text-[#0f172a] w-full p-4 rounded-xl mb-24'}`}>
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
        <div>
          <p>{billTo}</p>
        </div>
        <div className='flex gap-4'>
          <p>Invoice #: 00001</p>
          <p>{currentDate}</p>
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
            <td>{description}</td>
            <td className='text-center'>{quantity}</td>
            <td className='text-center'>{UnitPrice}</td>
            <td className='text-center'>${amount}</td>
          </tr>
        </tbody>
      </table>

      <p className='text-right pb-4'>Total: ${`${!amount ? '' : amount*UnitPrice}`}</p>

      <div className='flex flex-col gap-2'>
        <h3>Service Details</h3>
        <p>add day, Month day, year</p>
      </div>
    </section>
  )
}
