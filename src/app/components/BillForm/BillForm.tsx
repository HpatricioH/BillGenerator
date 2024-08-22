'use client'

import React, { useRef } from 'react'
import Loading from '@/app/core/utils/loading'
import { useReactToPrint } from 'react-to-print'
import { InvoiceServiceDetails } from '../InvoiceServiceDetails/InvoiceServiceDetails'
import { Button } from '@/app/core/utils/Button'
import { trpc } from '@/app/core/utils/trpc'

interface BillProps {
  id: string
  month?: string
  name: string | null | undefined
  email: string | null | undefined
}

export default function BillForm(props: BillProps) {
  const invoice = trpc.bill.getBill.useQuery({ id: props.id })
  const componentRef = useRef(null)

  const handlePrintInvoice = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${props.month}-bill`,
    onPrintError: () => alert("There is an error when printing"),
  })

  const {
    address,
    city,
    province,
    postalCode,
    phone,
    billTo,
    description,
    numMonth,
    createdAt,
    quantity,
    UnitPrice } = invoice?.data ?? {}

  if (invoice.isFetching === true) {
    return <Loading />
  }

  return (
    <section className='bg-[#FFF] text-[#0f172a] w-full p-6 rounded-xl' ref={componentRef}>
      <h1 className='text-center font-bold text-3xl pb-4'>Invoice</h1>
      <div className='pb-4'>
        <h2 className='font-bold text-xl'>{props.name}</h2>
        <p>{address}</p>
        <p>{city}, {province} {postalCode}</p>
      </div>

      <div className='pb-4'>
        <p>{phone}</p>
        <p>{props.email}</p>
      </div>

      <div className='flex justify-between pb-4'>
        <div className='w-[24rem]'>
          <p>{billTo}</p>
        </div>
        <div className='flex gap-2'>
          <p><span className='font-bold'>Invoice #:</span> 00001</p>
          {createdAt && <p>{new Date(createdAt).toLocaleDateString()}</p>}
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
            <td className='text-center'>{quantity ?? 0}</td>
            <td className='text-center'>${UnitPrice}</td>
            <td className='text-center'>${`${!UnitPrice ? '' : (quantity ?? 0) * UnitPrice}`}</td>
          </tr>
        </tbody>
      </table>

      <p className='text-right pb-4'>Total: ${`${!UnitPrice ? '' : (quantity ?? 0) * UnitPrice}`}</p>

      <div className='flex flex-col gap-2'>
        <h3 className='font-bold tracking-normal text-lg'>Service Details</h3>
        <InvoiceServiceDetails numMonth={(numMonth ?? 0)} />
      </div>

      <div className='text-xs font-bold tracking-wider text-end pt-4 print:hidden'>
        <Button onClick={handlePrintInvoice} className={'bg-opacity-0  group-hover:bg-opacity-20'}>Print</Button>
      </div>
    </section>
  )
}
