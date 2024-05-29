'use client'

import PlusSvg from "@/app/core/ui/svgs/PlusSvg";
import { Button } from "@/app/core/utils/Button";
import SearchBills from "../SearchBills/SearchBills";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { InvoiceModal } from "../InvoiceModal/InvoiceModal";

export default function ActionBar() {
  const [showModal, setShowModal] = useState(false)
  const pathname = usePathname()

  const handleModal = () => {
    setShowModal(true)
  }

  return (
    <div className="flex flex-col gap-3 md:flex-row  justify-between">
      <SearchBills pathname={pathname} />
      <div className="flex flex-col md:flex-row gap-3">
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
          <InvoiceModal />
        }</Modal>
    </div>
  )
}