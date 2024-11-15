import ActionBar from "../components/ActionBar/ActionBar"
import InnerMenuBar from "../components/InnerMenuBar/InnerMenuBar"


export default async function layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="text-[#fff] relative">
      <div className="grid max-h-dvh grid-row-[auto 1fr auto] container m-auto px-6">
        <InnerMenuBar />
        <ActionBar />
        {children}
      </div>
    </section>
  )
}