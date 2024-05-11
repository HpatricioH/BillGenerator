import ActionBar from "../components/ActionBar/ActionBar"
import Footer from "../components/Footer/Footer"
import InnerMenuBar from "../components/InnerMenuBar/InnerMenuBar"


export default function layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="bg-dark-primary text-[#fff] relative">
      <div className="flex flex-col gap-5 container m-auto px-6">
        <InnerMenuBar />
        <ActionBar />
        {children}
        <Footer />
      </div>
    </section>
  )
}