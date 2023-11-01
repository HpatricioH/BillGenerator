interface getABillProps {
  id: string;
}

const getBill = async ({ id }: getABillProps) => {
  const URL = `http://localhost:3000/api/bill/${id}`

  const response = await fetch(URL)
  
  return await response.json()
}

export default getBill
