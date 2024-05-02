import Navbar from "../Navbar/Navbar";

export function Header() {
  return (
    <header className='p-4 bg-dark-primary text-white sticky top-0 w-full py-4 duration-300 z-50'>
      <div className='flex container pl-4 pr-4 items-center justify-between mx-auto'>
        <Navbar />
      </div>
    </header>
  )
}
