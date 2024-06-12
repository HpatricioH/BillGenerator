'use client'

import DeleteSvg from '@/app/core/ui/svgs/DeleteSvg';
import ViewSvg from '@/app/core/ui/svgs/ViewSvg';
import Modal from '../Modal/Modal';
import BillForm from '../BillForm/BillForm';
import { useState } from 'react';
import DeleteModal from '../DeleteModal/DeleteModal';

interface BillCardsProps {
  numMonth: number;
  description: string;
  billTo: string;
  id: string;
  name: string | null | undefined;
  email: string | null | undefined;
}

export default function BillCards(props: BillCardsProps) {
  const [showModal, setShowModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)


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

  const handleDeleteModal = () => {
    setShowDeleteModal(true)
  }

  return (
    <section className="inline-block space-y-2 border border-white/10 bg-dark-midnight rounded-md relative px-4 py-2 w-full">
      <h1 className='font-bold text-lg text-center'>{month[props.numMonth]}</h1>
      <div className='border border-b border-dark-secondary/50'></div>
      <p className='text-left pt-1'>{props.description}</p>
      <p className='text-xs text-left'>{props.billTo}</p>
      <div className="relative flex gap-3 items-end justify-end *:fill-white *:w-5 *:h-5 *:cursor-pointer">
        <span className="tooltip tooltip-info" data-tip="View">
          <ViewSvg className="hover:fill-dark-secondary" onClick={viewModal} />
        </span>
        <span className="tooltip tooltip-info" data-tip="Delete">
          <DeleteSvg className="hover:fill-dark-secondary" onClick={handleDeleteModal} />
        </span>
      </div>
      <Modal
        setState={setShowModal}
        state={showModal}>{
          <BillForm id={props.id} month={month[props.numMonth]} name={props.name} email={props.email} />
        }</Modal>
      <Modal
        setState={setShowDeleteModal}
        state={showDeleteModal}>
        <DeleteModal id={props.id} setDeleteModal={setShowDeleteModal} billMonth={month[props.numMonth]} />
      </Modal>
    </section>
  )
}
