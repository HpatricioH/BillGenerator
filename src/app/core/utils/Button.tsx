import { ButtonProps } from "@/app/lib/types/button";

export function Button({onClick, children, type, className}: ButtonProps) {
  return (
    <button onClick={onClick} type={type} className='print:hidden relative inline-flex mt-4 items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-non focus:ring-cyan-800'>
      <span className={`relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0 ${className}`}>
        {children}
      </span>
    </button>
  )
}
