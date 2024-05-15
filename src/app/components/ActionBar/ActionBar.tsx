'use client'

import PlusSvg from "@/app/core/ui/svgs/PlusSvg";
import { Button } from "@/app/core/utils/Button";
import SearchBills from "../SearchBills/SearchBills";
import { usePathname } from "next/navigation";

export default function ActionBar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col gap-3 md:flex-row  justify-between">
      <SearchBills pathname={pathname} />
      <div className="flex flex-col md:flex-row gap-3">
        <Button className="btn-sm">
          <div className="flex justify-center items-center gap-1">
            <PlusSvg className="w-5 h-5 fill-white" />
            Create a new Bill
          </div>
        </Button>
      </div>
    </div>
  )
}