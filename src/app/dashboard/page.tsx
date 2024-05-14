import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import { redirect } from "next/navigation"
import SparklesSvg from "../core/ui/svgs/SparklesSvg";
import NoBills from "../components/NoBills/NoBills";

export default async function Page() {
  const session = await getServerAuthSession();
  const getBills = await api.bill.getBills.query();

  const testBills = []

  if (!session) {
    redirect('/login')
  }

  if (testBills.length === 0) {
    return (
      <NoBills />
    )
  }

  return (
    <main className="hero h-[calc(100vh-238px)]">
      Dashboard
    </main>
  )
}