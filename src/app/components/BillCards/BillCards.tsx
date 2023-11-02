'use client'

import getAllBills from "@/app/core/services/getAllBills"
import { useSession } from 'next-auth/react'
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import Image from "next/image"
import Loading from "@/app/core/utils/loading"


export default function BillCards() {
  const session = useSession()
  const [invoices, setInvoices] = useState<any[]>([]) 
  const router = useRouter()
  const { status } = session
  
  useEffect(() => {
    const getInvoices = async () => {
      const id = (await session?.data?.user as { id: string })?.id

      if (id) {
        const invoice = await getAllBills({ userId: id }) 
        setInvoices(invoice)
      }

    }
    getInvoices()
  }, [session.data?.user])

  if (status === "loading" && !invoices.length) {
    return <Loading />
  }
  
  const redirectToInvoice = (id: string) => {
    router.push(`/${id}`)
  }
  
  return (
    <section className={`${status === 'loading' && !invoices.length ? 'hidden' : 'bg-[#111827] p-4 rounded-xl w-full'}`}>
      <h1 className='text-center font-bold text-3xl pb-4'>Invoices</h1>
      <div className="flex gap-3 p-4 ">
        {invoices?.map((invoice, index) => (
          <div 
            key={index} 
            className="bg-[#e5e7eb] p-[0.10rem] cursor-pointer rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 " 
            onClick={() => redirectToInvoice(invoice?.id)}>

            <div className="transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-70 p-2">
              <h1 className="font-bold text-lg tracking-wide text-center pb-2">Month of Invoice</h1>
              <Image
                src="/images/invoice.png"
                alt="invoice"
                width={330}
                height={300}
                className="rounded-lg border border-[#111827] mb-2"
              />
              <p>{invoice?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
