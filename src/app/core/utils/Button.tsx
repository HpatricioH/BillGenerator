import { type ButtonProps } from "@/app/lib/types/button";

export function Button({ onClick, children, type, className, id }: ButtonProps) {
  return (
    <button onClick={onClick} type={type} className={`${className} btn`} id={id}>
      {children}
    </button>
  )
}
