import { api } from "@/trpc/server"

export default async function Home() {
  const getBill = await api.bill.hello.query({ text: "Generate your bills quick and easy" })

  return (
    <main className="hero h-[calc(100vh-10.3rem)] bg-dark-primary text-[#fff] relative">
      <div className="hero-content text-center absolute md:top-40 lg:top-44 xl:top-52">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Bill<span className="text-dark-secondary uppercase"> Generator</span>
          </h1>
          <div className="flex flex-col items-center gap-2">
            <p className="py-6">
              {getBill.greeting}
            </p>
            <button className="btn btn-active">Get Started</button>
          </div>
        </div>
      </div>
    </main>
  )
}
