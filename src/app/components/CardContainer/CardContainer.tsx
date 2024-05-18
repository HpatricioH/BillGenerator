import { api } from "@/trpc/server";
import NoBills from "../NoBills/NoBills";
import { Suspense } from "react";
import BillCards from "../BillCards/BillCards";

export default async function CardContainer({ query }: { query: string }) {
  const getBills = await api.bill.getBills.query();

  const filteredBills = getBills?.filter((bill) => {
    return bill?.description?.toLowerCase()?.includes(query.toLowerCase())
  })

  if (filteredBills.length === 0) {
    return <NoBills />
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 w-full">
      {filteredBills.map((bill) => {
        return (
          <Suspense key={bill.id} fallback={<div>loading...</div>}>
            <BillCards numMonth={bill.numMonth} description={bill.description} billTo={bill.billTo} />
          </Suspense>
        )
      })}
    </div>
  )
}