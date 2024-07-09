import { Button } from "@/app/core/utils/Button";
import { errorToastHandler, successToastHandler } from "@/app/core/utils/toastHandler";
import { api } from '@/trpc/react';
import { useRouter } from "next/navigation";

interface AutoBillViewModalProps {
  address: string;
  city: string;
  province: string;
  postalCode: string;
  billTo: string;
  description: string;
  unitPrice: number;
  billNumber: number;
  quantity: number;
  phone: string;
  setShowModal: (value: boolean) => void
}

export default function AutoBillViewModal(props: AutoBillViewModalProps) {
  const router = useRouter()
  const autoBillAddress = props.address + "," + props.city + ", " + props.province + " " + props.postalCode;
  const billTo = props.billTo;
  const description = props.description;
  const unitPrice = props.unitPrice;
  const billNumber = props.billNumber;
  const quantity = props.quantity;
  const phone = props.phone;
  const numMonth: number = new Date().getMonth();
  const createBill = api.bill.createBill.useMutation()

  const handleCloseModal = () => {
    props.setShowModal(false)
  }

  const handleCreateAutoBill = () => {
    const amount = Number(quantity * unitPrice);

    createBill.mutate({
      address: props.address,
      city: props.city,
      province: props.province,
      postalCode: props.postalCode,
      billTo: billTo,
      quantity: quantity,
      phone: phone,
      description: description,
      UnitPrice: unitPrice,
      amount: amount,
      numMonth: numMonth,
    }, {
      onSuccess: () => {
        successToastHandler({ message: "Bill created successfully" })
        router.refresh()
        props.setShowModal(false)
        router.push('/dashboard')
      }, onError: () => {
        errorToastHandler({ message: "Failed to create bill" })
        props.setShowModal(false)
      }
    });
  }


  return (
    <div className="text-white/50 p-4">
      <h1 className="text-white text-center text-xl font-bold tracking-wide ">Auto Bill Details</h1>
      <div className="[&_h2]:font-bold [&_h2]:pt-5 [&_h2]:text-white/70">
        <h2>Address:</h2>
        <p>{autoBillAddress}</p>
        <h2>Bill To:</h2>
        <p>{billTo}</p>
        <h2>Description:</h2>
        <p>{description}</p>
        <h2>Unit Price:</h2>
        <p>${unitPrice}</p>
        <h2>Bill Number:</h2>
        <p>{billNumber}</p>
      </div>
      <div className="flex justify-end gap-3 pt-7 text-white">
        <Button
          onClick={handleCreateAutoBill}
        >
          Generate Bill
        </Button>
        <Button onClick={handleCloseModal} className="btn-error text-white">Cancel</Button>
      </div>
    </div>
  )
}