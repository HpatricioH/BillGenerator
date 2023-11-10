interface getAllBillsProps {
  userId: string;
}

const getAllBills = async ({ userId }: getAllBillsProps) => {
  const URL = process.env.NEXT_PUBLIC_URL
  const fetchUrl = `${URL}/api/bill/all/${userId}`

  const response = await fetch(fetchUrl)

  return await response.json()
}

export default getAllBills