interface getAllBillsProps {
  userId: string;
}

const getAllBills = async ({ userId }: getAllBillsProps) => {
  const URL = `http://localhost:3000/api/bill/all/${userId}`

  const response = await fetch(URL)

  return await response.json()
}

export default getAllBills