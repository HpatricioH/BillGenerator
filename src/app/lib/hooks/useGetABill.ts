import getBill from "@/app/core/services/getBill";
import { useCallback, useEffect, useState } from "react";

interface UseGetABillProps {
  id: string | string[] 
}

export const useGetABill = ({ id }: UseGetABillProps) => {
  const [invoice, setInvoice] = useState<[]>([])

  const getInvoice = useCallback(async () => {
    // get one bill by id 
    const response = await getBill({ id: id as string })
    setInvoice(response);
  }, [id]);
  
  useEffect(() => {
    getInvoice()
  }, [getInvoice])

  return { invoice }
}
