import getAllBills from '@/app/core/services/getAllBills'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

export const useGetBill = () => {
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

  return { invoices }
}
