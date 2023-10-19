interface Props {
  fill?: string
}

const IconCross = (props: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} {...props}>
    <path
      d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"
    />
  </svg>
)
export default IconCross