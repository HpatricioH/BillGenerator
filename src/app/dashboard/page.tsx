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
    <main className="hero h-[calc(100vh-238px)] relative">
      <div className="flex text-center absolute top-5 w-full">
        <CardContainer query={query} />
      </div>
    </main>
  )
}