import Link from "next/link"
import { getServerAuthSession } from "@/server/auth";


export default async function Home() {
  const session = await getServerAuthSession()

  return (
    <main className="hero h-[calc(100vh-138px)] bg-dark-primary text-[#fff] relative overflow-hidden">
      <div className="hero-content text-center absolute md:top-40 lg:top-44 xl:top-52">
        <div className="background-gradient">
        </div>
        <div className="max-w-md z-10">
          <h1 className="text-5xl font-bold ">
            Bill<span className="text-dark-secondary uppercase"> Generator</span>
          </h1>
          <div className="flex flex-col items-center gap-2 z-10">
            <p className="py-6">
              Generate your bills quick and easy
            </p>
            <Link
              href={!session ? "/login" : "/dashboard"}
              className="btn btn-active">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
