import { getServerAuthSession } from "@/server/auth";
import ActionBar from "../components/ActionBar/ActionBar"
import InnerMenuBar from "../components/InnerMenuBar/InnerMenuBar"


export default async function layout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerAuthSession();
  return (
    <section className="bg-dark-primary text-[#fff] relative">
      <div className="flex flex-col gap-5 container m-auto px-6">
        <InnerMenuBar />
        <ActionBar id={session?.user.id} />
        {children}
      </div>
    </section>
  )
}