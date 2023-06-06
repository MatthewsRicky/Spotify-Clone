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
        text-black
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
      disabled={diasbled}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = "Button"

export default Button