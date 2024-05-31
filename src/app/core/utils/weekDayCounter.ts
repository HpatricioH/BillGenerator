interface WeekDayCounterProps {
  numMonth: number
}

export default function weekDayCounter (props: WeekDayCounterProps) {
  const invoiceMonth = new Date().getMonth() - props.numMonth
  const month = new Date().getMonth() - invoiceMonth
  const year = new Date().getFullYear()
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const options:Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } 

  const fridays: string[] = []

  for (let day = firstDay; day <= lastDay; day.setDate(day.getDate() + 1)) {
    if (day.getDay() === 5) {
      fridays.push(new Intl.DateTimeFormat('en-US', options).format(day))
    }
  }

  return fridays
}