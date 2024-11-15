'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function InnerMenuBar() {
  const pathname = usePathname()

  return (
    <div className="border-b-2 border-white/10 navbar pb-0">
      <ul className="justify-start gap-6">
        <li>
          <Link
            href={'/dashboard'}
            className={pathname === '/dashboard' ? 'text-dark-secondary tracking-wide font-bold' : 'text-white tracking-wide'}>
            Bills
          </Link>
        </li>
        <li>
          <Link
            href={'/dashboard/Auto-generate'}
            className={pathname !== '/dashboard' ? 'text-dark-secondary tracking-wide font-bold' : 'text-white tracking-wide'}>
            Auto-Generate Bills
          </Link>
        </li>
      </ul>
    </div>
  )
}