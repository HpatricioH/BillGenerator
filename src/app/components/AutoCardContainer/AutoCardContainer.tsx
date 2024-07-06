import { api } from "@/trpc/server";
import NoBills from "../NoBills/NoBills";
import { Suspense } from "react";
import { getServerAuthSession } from "@/server/auth";
import AutoBillCard from "../AutoBillCard/AutoBillCard";

export default async function AutoCardContainer({ query }: { query: string }) {
  // const session = await getServerAuthSession();
  const getAutoBills = await api.autoBill.getAutoBills.query();
  // const { name, email } = session?.user as { name: string | null | undefined; email: string | null | undefined };

  const filteredAutoBills = getAutoBills?.filter((bill) => {
    return bill?.description?.toLowerCase()?.includes(query.toLowerCase())
  })

  if (filteredAutoBills.length === 0) {
    return <NoBills type="auto-bill" />
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 w-full">
      {filteredAutoBills.map((bill) => {
        return (
          <Suspense key={bill.id} fallback={<div>loading...</div>}>
            <AutoBillCard numMonth={bill.numMonth} description={bill.description} billTo={bill.billTo} id={bill.id} address={bill.address} city={bill.city} province={bill.province} postalCode={bill.postalCode} unitPrice={bill.UnitPrice} billNumber={bill.billNumber} />
          </Suspense>
        )
      })}
    </div>
  )
}