import Link from "next/link";

export default function InnerMenuBar() {
  return (
    <div className="border-b-2 border-white/10 bg-dark-primary navbar pb-0">
      <ul className="justify-start gap-6">
        <li>
          <Link href={'/dashboard'}>Bills</Link>
        </li>
        <li>
          <Link href={'/dashboard/Auto-generate'}>Auto-Generate Bills</Link>
        </li>
      </ul>
    </div>
  )
}