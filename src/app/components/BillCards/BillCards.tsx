'use client'

import getAllBills from "@/app/core/services/getAllBills"
import { useSession } from 'next-auth/react'
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import Image from "next/image"
import Loading from "@/app/core/utils/loading"
import { useGetBill } from "@/app/lib/hooks/useGetBill"


export default function BillCards() {
  const session = useSession()
  const { invoices } = useGetBill()
  const router = useRouter()
  const { status } = session
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];


  if (status === "loading" || invoices.length === 0) {
    return <Loading />
  }
  
  const redirectToInvoice = (id: string) => {
    router.push(`/${id}`)
  }
  
  return (
    <section className={`${invoices.length === 0 ? 'hidden' : 'bg-[#111827] p-4 rounded-xl w-full'}`}>
      <h1 className='text-center font-bold text-3xl pb-4'>Invoices</h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {invoices?.map((invoice, index) => (
          <div 
            key={index} 
            className="bg-[#e5e7eb] p-[0.10rem] cursor-pointer rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 " 
            onClick={() => redirectToInvoice(invoice?.id)}>
            <div className="transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-70 p-2">
              <h1 className="font-bold text-lg tracking-wide text-center pb-2">{month[invoice.numMonth]}</h1>
              <Image
                src="/images/invoice.png"
                alt="invoice"
                width={330}
                height={300}
                className="rounded-lg border border-[#111827] mb-2 w-full"
              />
              <p>{invoice?.description}</p>
            </div>
          </div>
        
        ))}
      </div>
    </section>
  )
}
