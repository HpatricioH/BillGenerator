import { api } from "@/trpc/server";
import NoBills from "../NoBills/NoBills";
import { Suspense } from "react";
import BillCards from "../BillCards/BillCards";
import { getServerAuthSession } from "@/server/auth";

export default async function CardContainer({ query }: { query: string }) {
  const session = await getServerAuthSession();
  const getBills = await api.bill.getBills.query();
  const { name, email } = session?.user as { name: string | null | undefined; email: string | null | undefined };

  const filteredBills = getBills?.filter((bill) => {
    return bill?.description?.toLowerCase()?.includes(query.toLowerCase())
  })

  if (filteredBills.length === 0) {
    return <NoBills type="bill" />
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 w-full">
      {filteredBills.map((bill) => {
        return (
          <Suspense key={bill.id} fallback={<div>loading...</div>}>
            <BillCards numMonth={bill.numMonth} description={bill.description} billTo={bill.billTo} id={bill.id} name={name} email={email} />
          </Suspense>
        )
      })}
    </div>
  )
}