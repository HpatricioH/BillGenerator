'use client'

import { Button } from "@/app/core/utils/Button";

export default function ActionBar() {
  return (
    <div className="flex flex-col gap-3 md:flex-row  justify-between">
      <form >
        <input
          className='input input-bordered input-sm w-full max-w-xs'
          placeholder="Search..."
        />
      </form>
      <div className="flex flex-col md:flex-row gap-3">
        <Button className="btn-sm">
          <div className="flex gap-1">
            Create new Bill
          </div>
        </Button>
      </div>
    </div>
  )
}