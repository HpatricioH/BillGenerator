import { useMemo } from "react"

interface InvoicesServiceDetailsProps {
  numMonth: number
}

export const InvoiceServiceDetails = ({numMonth}: InvoicesServiceDetailsProps) => {

  const fridays = useMemo(() => {
    const invoiceMonth = new Date().getMonth() - numMonth
    const month = new Date().getMonth() - invoiceMonth
    const year = new Date().getFullYear()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } as const
    const fridays: string[] = []
  
    for (let day = firstDay; day <= lastDay; day.setDate(day.getDate() + 1)) {
      if (day.getDay() === 5) {
        fridays.push(new Intl.DateTimeFormat('en-US', options).format(day))
      }
    }

    return fridays
  }, [numMonth])


  return (
    fridays.map((friday, index) => (
      <div key={index}>
        <p className="pl-[1rem]"><span>- </span>{friday}</p>
      </div>
    ))
  )
}
