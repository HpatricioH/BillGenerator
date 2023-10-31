'use client'

import React from 'react'
import { useSession } from 'next-auth/react'

export default function  BillForm () {
  const session = useSession()
  const year = new Date().getFullYear()
  const month = new Date().getMonth()
  const day = new Date().getDate()
  const currentDate = year +"/" +month +"/" +day
  
  const getInvoice = async () => {
    const { id } = await session?.data?.user as { id: '' } 
    console.log(id); 
    const bill = await fetch(`http://localhost:3000/api/bill/${id}`)
    const data = await bill.json()
    console.log(data);
  }

  return (
    <section className='bg-[#FFF] text-[#0f172a] w-full p-4 rounded-xl mb-24' onClick={() => getInvoice()}>
      <h1 className='text-center font-bold text-3xl pb-4'>Invoice</h1>
      <div className='pb-4'>
        <h2 className='font-bold text-xl'>{session.data?.user?.name}</h2>
        <p>My Address: 30 Isaac Street</p>
        <p>My City: Elmira, Ontario N3B 0E2</p>
      </div>

      <div className='pb-4'>
        <p>Phone: 513-8708-128</p>
        <p>{session.data?.user?.email}</p>
      </div>
      
      <div className='flex justify-between pb-4'>
        <div>
          <p>Bill To: Address that the invoice is directed to</p>
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
            <td>Cleaning Services</td>
            <td className='text-center'>5</td>
            <td className='text-center'>$100</td>
            <td className='text-center'>$500</td>
          </tr>
        </tbody>
      </table>

      <p className='text-right pb-4'>Total: $500</p>

      <div className='flex flex-col gap-2'>
        <h3>Service Details</h3>
        <p>add day, Month day, year</p>
      </div>
    </section>
  )
}
