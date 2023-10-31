'use client'

import getAllBills from "@/app/core/services/getAllBills"
import { useSession } from 'next-auth/react'
import { useEffect, useState } from "react"


export default function BillCards() {
  const session = useSession()
  const [invoices, setInvoices] = useState<any[]>([]) 
  
  
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
  
  console.log(invoices);


  return (
    <section>
      <h1>Bill Cards</h1>
      {invoices?.map((invoice, index) => (
        <div key={index}>
          <h1>{invoice?.description}</h1>
        </div>
      ))}
    </section>
  )
}
