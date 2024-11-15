import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation"
import CardContainer from "../components/CardContainer/CardContainer";

export default async function Page({
  searchParams,
}: {
  searchParams: {
    query: string;
  }
}) {
  const session = await getServerAuthSession()
  const query = searchParams?.query ?? ''

  if (!session) {
    redirect('/login')
  }

  return (
    <main className=" relative">
      <div className="flex text-center">
        <CardContainer query={query} />
      </div>
    </main>
  )
}