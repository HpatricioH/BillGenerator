import { NewBillProps } from "@/app/lib/types/addNewBill";


const addNewBill = async (
  {
    address,
    city,
    province,
    postalCode,
    phone,
    billTo,
    description,
    quantity,
    UnitPrice,
    amount,
    userId }: NewBillProps) => {
  const URL = 'https://bill-generator-kappa.vercel.app/api/bill'

  const numQuantity = Number(quantity)
  const numUnitPrice = Number(UnitPrice)
  const numAmount = Number(amount)

  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ address, city, province, postalCode, phone, billTo, description, quantity: numQuantity, UnitPrice: numUnitPrice, amount: numAmount, userId })
  })

  return await response.json()
}

export default addNewBill