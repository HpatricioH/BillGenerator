'use client'

import DeleteSvg from "@/app/core/ui/svgs/DeleteSvg";
import ViewSvg from "@/app/core/ui/svgs/ViewSvg";
import Modal from "../Modal/Modal";
import { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import AutoBillViewModal from "../AutoBillViewModal/AutoBillViewModal";

interface BillCardsProps {
  description: string;
  billTo: string;
  numMonth: number;
  id: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  unitPrice: number;
  billNumber: number;
}

export default function AutoBillCard(props: BillCardsProps) {
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

  console.log(props);

  return (
    <section className="inline-block space-y-2 border border-white/10 bg-dark-midnight rounded-md relative px-4 py-2 w-full">
      <h1 className='font-bold text-lg text-center'>Auto Generate Bill</h1>
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
          <AutoBillViewModal description={props.description} billTo={props.billTo} address={props.address} city={props.city} province={props.province} postalCode={props.postalCode} unitPrice={props.unitPrice} billNumber={props.billNumber} setShowModal={setShowModal} />
        }</Modal>
      <Modal
        setState={setShowDeleteModal}
        state={showDeleteModal}>
        <DeleteModal id={props.id} setDeleteModal={setShowDeleteModal} billMonth={month[props.numMonth]} />
      </Modal>
    </section>
  )
}