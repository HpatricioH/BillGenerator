interface getABillProps {
  id: string;
}

const getBill = async ({ id }: getABillProps) => {
  const URL = process.env.NEXT_PUBLIC_URL
  const fetchUrl = `${URL}/api/bill/${id}`

  const response = await fetch(fetchUrl)
  
  return await response.json()
}

export default getBill
