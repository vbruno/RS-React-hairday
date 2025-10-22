import { cva, cx, type VariantProps } from "class-variance-authority";

import Text from "./text";
import { useState } from "react";

interface InputSelectTimeProps extends
  VariantProps<typeof inputSelectTimeVariants>,
  Omit<React.ComponentProps<"button">, "size" | "disabled"> {
  selected?: boolean,
  timeValue: string
}

export default function InputSelectTime({
  selected,
  disabled,
  className,
  timeValue,
  ...props
}: InputSelectTimeProps) {
  const [isSelected, setIsSelected] = useState(disabled ? false : (selected ?? false))

  function handleSelectedTime() {
    setIsSelected((selected) => !selected)
  }

  return <button
    className={cx(
      isSelected ? "border-yellow" : "border-gray-500",
      inputSelectTimeVariants({ disabled }),
      className
    )}
    onClick={handleSelectedTime}
    {...props}
  >
    <Text
      variant={"title-md"}
      className={
        isSelected ? "text-yellow" : "text-gray-200!"
      }
    >{timeValue}</Text>
  </button>
}

const inputSelectTimeVariants = cva(`
    w-19.5 h-10
    flex items-center justify-center group cursor-pointer
    rounded-lg py-2 px-5
    bg-gray-600 hover:bg-gray-500
    border border-solid border-gray-500
  `, {
  variants: {
    disabled: {
      true: "opacity-50 pointer-events-none"
    }
  },
  defaultVariants: {
    disabled: false
  }
})
