interface getAllBillsProps {
  userId: string;
}

const getAllBills = async ({ userId }: getAllBillsProps) => {
  const URL = `https://bill-generator-kappa.vercel.app/api/bill/all/${userId}`

  const response = await fetch(URL)

  return await response.json()
}

export default getAllBills