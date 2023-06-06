import { forwardRef } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  children, 
  diasbled,
  type = "button",
  ...props
}, ref) => {
  return (
    <button
      type={type}
      className={twMerge(`
        w-full
        rounded-full
        bg-green-500
        border
        border-transparent
        py-3
        px-3
        disabled:cursor-not-allowed
        disabled:opacity-50
        font-bold
        hover:opacity-75
        transition
      `, className
      )}
    >
      Sign up
    </button>
  )
})

Button.displayName = "Button"

export default Button