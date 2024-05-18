'use client'

import { useRouter } from 'next/navigation'
import Image from "next/image"
import Loading from "@/app/core/utils/loading"
import EditSvg from '@/app/core/ui/svgs/EditSvg';
import DeleteSvg from '@/app/core/ui/svgs/DeleteSvg';

interface BillCardsProps {
  numMonth: number;
  description: string
  billTo: string
}

export default function BillCards(props: BillCardsProps) {
  const router = useRouter()
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"];

  // TODO: check the deleted id page for layout of the bill. 
  const redirectToInvoice = (id: string) => {
    router.push(`/${id}`)
  }

  return (
    <section className="inline-block space-y-2 border border-white/10 bg-dark-midnight rounded-md relative px-4 py-2 w-full">
      <h1 className='font-bold text-lg pb-4 text-start'>{month[props.numMonth]}</h1>
      <p className='text-left'>{props.description}</p>
      <p className='text-xs text-left'>{props.billTo}</p>
      <div className="relative flex gap-3 items-end justify-end *:fill-white *:w-5 *:h-5 *:cursor-pointer">
        <span className="tooltip tooltip-info" data-tip="Edit">
          <EditSvg className="hover:fill-dark-violet" />
        </span>
        <span className="tooltip tooltip-info" data-tip="Delete">
          <DeleteSvg className="hover:fill-dark-violet" />
        </span>
      </div>
    </section>
  )
}
