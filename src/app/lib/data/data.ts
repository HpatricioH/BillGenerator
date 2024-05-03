export async function fetchBillData ({ userId }: { userId: string }) {
  const URL = process.env.NEXT_PUBLIC_URL
  const fetchUrl = `${URL}/api/bill/all/${userId}`
  const response = await fetch(fetchUrl)
  const data = await response.json()
  return data
}