import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import Image from 'next/image'
import { type NavbarProps } from '../Navbar/Navbar'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import HomeSvg from '@/app/core/ui/svgs/HomeSvg'
import DashboardSvg from '@/app/core/ui/svgs/DashboardSvg'

const links = [
  {
    name: 'Home',
    href: '/',
    className: 'group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10',
    svg: <HomeSvg className='size-4 fill-white/30' />,
  },
  {
    name: 'Dashboard',
    href: '/dashboard',
    className: 'group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10',
    svg: <DashboardSvg className='size-4 fill-white/30' />,
  }
]

export default function MenuDropdown({ image }: NavbarProps) {
  return (
    <div>
      <Menu>
        <MenuButton className="btn btn-circle avatar">
          <div className="w-10 rounded-full">
            <Image
              src={image ?? '/images/person-fill.svg'}
              alt='user image'
              width={50}
              height={50}
              className='rounded-xl' />
          </div>
        </MenuButton>
        <Transition
          enter="transition ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems
            anchor="bottom end"
            className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none z-50">
            {links.map((link, i) => {
              return (
                <MenuItem key={i}>
                  <Link
                    href={link.href}
                    className={link.className}>
                    {link.svg} {link.name}
                  </Link>
                </MenuItem>
              )
            })}
            <div className="my-1 h-px bg-white/5" />
            {
              image
                ? <MenuItem>
                  <p
                    className='btn btn-sm bg-dark-primary w-full mt-2'
                    onClick={() => signOut()}>
                    Logout
                  </p>
                </MenuItem>
                : <MenuItem>
                  <Link href="/login" className='btn btn-sm bg-dark-primary w-full mt-2'>
                    Login
                  </Link>
                </MenuItem>
            }
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  )
}