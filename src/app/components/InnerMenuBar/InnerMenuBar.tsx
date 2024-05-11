import Link from "next/link";

export default function InnerMenuBar() {
  return (
    <div className="border-b-2 border-white/10 bg-dark-primary navbar pb-0">
      <ul className="justify-start">
        <li>
          <Link href={'/dashboard'}>Bills</Link>
        </li>
      </ul>
    </div>
  )
}