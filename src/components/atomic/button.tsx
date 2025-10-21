import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import Text from "./text";
import Skeleton from "./skeleton";

interface ButtonProps extends
  Omit<React.ComponentProps<"button">, "size" | "disabled">,
  VariantProps<typeof buttonVariants> {
  loading?: boolean
}

export default function Button({
  loading,
  variant,
  size,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {

  if (loading) {
    return <Skeleton />
  }

  return (
    <button {...props} className={buttonVariants({ variant, size, disabled, className })}>
      <Text variant={"body-md-bold"} className={buttonTextVariants({ variant })}>
        {children}
      </Text>
    </button>
  )
}

// Styles

const buttonVariants = cva(`
    flex items-center justify-center cursor-pointer
    transition rounded-lg group gap-2
  `, {
  variants: {
    variant: {
      primary: "bg-yellow hover:border-yellow-light hover:border-2"
    },
    size: {
      md: "h-14 w-45 py-4 px-5"
    },
    disabled: {
      true: "opacity-30 pointer-events-none"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    disabled: false
  }
})

const buttonTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-gray-900 uppercase"
    },
  },
  defaultVariants: {
    variant: "primary"
  }
})
