import PlusSvg from "@/app/core/ui/svgs/PlusSvg";
import SparklesSvg from "@/app/core/ui/svgs/SparklesSvg";
import { Button } from "@/app/core/utils/Button";

export default function NoBills() {
  return (
    <main className="hero h-[calc(100vh-238px)] relative">
      <div className="text-center absolute flex flex-col justify-center items-center gap-2 top-40">
        <SparklesSvg className="fill-white w-16 h-16" />
        <h1 className="text-3xl font-bold">No bills found</h1>
        <Button className="btn-sm">
          <div className="flex justify-center items-center gap-1">
            <PlusSvg className="w-5 h-5 fill-white" />
            Create a new Bill
          </div>
        </Button>
      </div>
    </main>
  )
}