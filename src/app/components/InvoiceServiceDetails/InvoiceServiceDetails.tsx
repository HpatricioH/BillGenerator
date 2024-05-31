import weekDayCounter from "@/app/core/utils/weekDayCounter"
import { useMemo } from "react"

interface InvoicesServiceDetailsProps {
  numMonth: number
}

export const InvoiceServiceDetails = ({ numMonth }: InvoicesServiceDetailsProps) => {

  const fridays = useMemo(() => {
    return weekDayCounter({ numMonth })
  }, [numMonth])


  return (
    fridays.map((friday, index) => (
      <div key={index}>
        <p className="pl-[1rem]"><span>- </span>{friday}</p>
      </div>
    ))
  )
}
