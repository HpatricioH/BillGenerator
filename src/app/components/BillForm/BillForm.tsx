'use client'

import React from 'react'
import { useSession } from 'next-auth/react'

export default function BillForm() {
  const session = useSession()

  return (
    <section className='bg-[#0f172a] text-[#e5e7eb] w-full'>
      <h1>Invoice</h1>
      <p>{session.data?.user?.name}</p>
      <p>My Address: 30 Isaac Street</p>
      <p>My City: Elmira, Ontario N3B 0E2</p>

      <p>Phone: 513-8708-128</p>
      <p>{session.data?.user?.email}</p>      
      
      <p>Bill To: Address that the invoice is directed to</p>
      <p>Invoice #: 00001</p>
      <p>date</p>

      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cleaning Services</td>
            <td>5</td>
            <td>$100</td>
            <td>$500</td>
          </tr>
        </tbody>
      </table>

      <p>Total: $500</p>

      <h3>Service Details</h3>
      <p>add day, Month day, year</p>
    </section>
  )
}
