import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerAuthSession();

  if (!session) {
    redirect('/login')
  }

  return (
    <main className="hero h-[calc(100vh-10.3rem)]">
      Dashboard
    </main>
  )
}