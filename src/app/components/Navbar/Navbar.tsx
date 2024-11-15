'use client'

import Image from 'next/image'
import Link from 'next/link'
import MenuDropdown from '../MenuDropdown/MenuDropdown';

export interface NavbarProps {
  image: string | null | undefined;
}

export default function Navbar({ image }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="flex-1">
        <Link href='/' className='flex'>
          <Image
            src='/images/logo.png'
            alt='logo'
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div className="flex-none gap-2">
        <MenuDropdown image={image} />
      </div>
    </nav>
  )
}