'use client'

import { Button } from "@/app/core/utils/Button"
import { errorToastHandler, successToastHandler } from "@/app/core/utils/toastHandler"
import { api } from "@/trpc/react"
import { useRouter } from "next/navigation"

interface DeleteModalProps {
  id: string
  setDeleteModal: (value: boolean) => void
  billMonth: string | undefined
}

export default function DeleteModal(props: DeleteModalProps) {
  const router = useRouter()
  const deleteBill = api.bill.deleteBill.useMutation()

  const handleDelete = () => {
    deleteBill.mutate({ id: props.id }, {
      onSuccess: () => {
        successToastHandler({ message: 'Bill deleted successfully' })
        router.refresh()
      }, onError: () => {
        errorToastHandler({ message: 'Error deleting bill' })
      }
    })
  }

  const handleCloseModal = () => {
    props.setDeleteModal(false)
  }

  return (
    <div className="text-white/50 p-4">
      <h1 className="text-white text-center text-xl font-bold tracking-wide ">Delete Bill</h1>
      <p className="pt-4">Please note, if the <span className="text-white font-bold">{props.billMonth}</span> bill is deleted, this action cannot be undone.</p>
      <div className="flex justify-end gap-3 pt-7 text-white">
        <Button
          onClick={handleDelete}
          className={`${deleteBill.isLoading ? 'loading loading-spinner' : 'btn-error'} `}>
          Delete Bill
        </Button>
        <Button onClick={handleCloseModal}>Cancel</Button>
      </div>
    </div>
  )
}