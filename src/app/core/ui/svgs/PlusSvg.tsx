import { type SvgProps } from "./GithubSvg"

export default function PlusSvg({ className, ...props }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <g>
        <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" />
      </g>
    </svg>
  )
}


