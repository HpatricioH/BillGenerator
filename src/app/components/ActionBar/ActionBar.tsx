'use client'

import { Button } from "@/app/core/utils/Button";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { InvoiceModal } from "../InvoiceModal/InvoiceModal";
import SearchBills from "../SearchBills/SearchBills";
import Modal from "../Modal/Modal";
import PlusSvg from "@/app/core/ui/svgs/PlusSvg";
import AutoGenerateSvg from "@/app/core/ui/svgs/AutoGenerateSvg";
import AutoBillForm from "../AutoBillForm/AutoBillForm";

export default function ActionBar() {
  const [showModal, setShowModal] = useState(false)
  const [showAutoBillModal, setShowAutoBillModal] = useState(false)
  const pathname = usePathname()

  const handleModal = () => {
    setShowModal(true)
  }

  const handleModalAutoBill = () => {
    setShowAutoBillModal(true)
  }

  return (
    <div className="flex flex-col gap-3 md:flex-row  justify-between">
      <SearchBills pathname={pathname} />
      <div className="flex flex-col md:flex-row gap-3">
        <Button className="btn-sm" onClick={handleModalAutoBill}>
          <div className="flex justify-center items-center gap-1">
            <AutoGenerateSvg className="w-5 h-5 fill-white" />
            Auto-generate Invoice
          </div>
        </Button>
        <Button className="btn-sm" onClick={handleModal}>
          <div className="flex justify-center items-center gap-1">
            <PlusSvg className="w-5 h-5 fill-white" />
            Create a new Bill
          </div>
        </Button>
      </div>
      <Modal
        setState={setShowModal}
        state={showModal}>{
          <InvoiceModal setShowModal={setShowModal} />
        }</Modal>
      <Modal
        setState={setShowAutoBillModal}
        state={showAutoBillModal}>{
          <AutoBillForm setShowAutoBillModal={setShowAutoBillModal} />
        }</Modal>
    </div>
  )
}