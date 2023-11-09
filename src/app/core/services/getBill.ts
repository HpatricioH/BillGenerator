interface getABillProps {
  id: string;
}

const getBill = async ({ id }: getABillProps) => {
  const URL = `https://bill-generator-kappa.vercel.app/api/bill/${id}`

  const response = await fetch(URL)
  
  return await response.json()
}

export default getBill
