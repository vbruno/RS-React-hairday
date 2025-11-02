import { cva, cx, type VariantProps } from "class-variance-authority";
import { textVariants } from "../../styles/components/textVariants";
import Icon from "./icon";

import UserIcon from "../../assets/icons/User-Square.svg?react"

interface InputTextProps extends
  VariantProps<typeof inputTextVariants>,
  Omit<React.ComponentProps<"input">, "size" | "disabled"> { }

export default function InputText({
  size,
  disabled,
  className,
  ...props
}: InputTextProps) {
  return (
    <div className={inputTextVariants({ size, disabled })} >
      <Icon className="fill-yellow size-5" svg={UserIcon} />
      <input
        className={cx(
          "outline-none text-gray-200! flex-1",
          textVariants(),
          className
        )}
        {...props}
      />
    </div>
  )
}

const inputTextVariants = cva(`
    flex justify-center items-center rounded-lg gap-2
    border border-solid border-gray-500 focus-within:border-yellow-dark
    bg-transparent group transition-colors
  `, {
  variants: {
    size: {
      md: "p-3",
    },
    disabled: {
      true: "pointer-events-none"
    }
  },

  defaultVariants: {
    size: "md",
    disabled: false
  }
})
