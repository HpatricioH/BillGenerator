'use client'

import { useRouter } from 'next/navigation'
import Image from "next/image"
import Loading from "@/app/core/utils/loading"
import DeleteSvg from '@/app/core/ui/svgs/DeleteSvg';
import ViewSvg from '@/app/core/ui/svgs/ViewSvg';
import Modal from '../Modal/Modal';
import { InvoiceModal } from '../InvoiceModal/InvoiceModal';
import BillForm from '../BillForm/BillForm';
import { useState } from 'react';

interface BillCardsProps {
  numMonth: number;
  description: string;
  billTo: string;
  id: string;
}

export default function BillCards(props: BillCardsProps) {
  const [showModal, setShowModal] = useState(false)
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

  const viewModal = () => {
    setShowModal(true)
  }

  return (
    <section className="inline-block space-y-2 border border-white/10 bg-dark-midnight rounded-md relative px-4 py-2 w-full">
      <h1 className='font-bold text-lg text-center'>{month[props.numMonth]}</h1>
      <div className='border border-b border-dark-secondary/50'></div>
      <p className='text-left pt-1'>{props.description}</p>
      <p className='text-xs text-left'>{props.billTo}</p>
      <div className="relative flex gap-3 items-end justify-end *:fill-white *:w-5 *:h-5 *:cursor-pointer">
        <span className="tooltip tooltip-info" data-tip="Edit">
          <ViewSvg className="hover:fill-dark-secondary" onClick={viewModal} />
        </span>
        <span className="tooltip tooltip-info" data-tip="Delete">
          <DeleteSvg className="hover:fill-dark-secondary" />
        </span>
      </div>
      <Modal
        title={month[props.numMonth]}
        setState={setShowModal}
        state={showModal}>{
          <BillForm id={props.id} />
        }</Modal>
    </section>
  )
}
