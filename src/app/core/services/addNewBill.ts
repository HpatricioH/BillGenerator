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
    numMonth,
    amount,
    userId }: NewBillProps) => {
  const URL = process.env.NEXT_PUBLIC_URL    
  const fetchUrl = `${URL}/api/bill`

  const numQuantity = Number(quantity)
  const numUnitPrice = Number(UnitPrice)
  const numAmount = Number(amount)

  const response = await fetch(fetchUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      address, 
      city, 
      province, 
      postalCode, 
      phone, 
      billTo, 
      description, 
      quantity: numQuantity, 
      UnitPrice: numUnitPrice, 
      numMonth,
      amount: numAmount, 
      userId 
    })
  })

  return await response.json()
}

export default addNewBill