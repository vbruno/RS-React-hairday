import type React from "react";
import Icon from "./icon";
import { cva, type VariantProps } from "class-variance-authority";

import Skeleton from "./skeleton";

interface IconButtonProps extends
  Omit<React.ComponentProps<"button">, "size" | "disabled">,
  VariantProps<typeof iconButtonVariants> {
  icon: React.ComponentProps<typeof Icon>["svg"]
  loading?: boolean
}

export default function IconButton({
  loading,
  variant,
  size,
  disabled,
  className,
  icon,
  ...props
}: IconButtonProps) {

  if (loading) {
    return <Skeleton
      rounded={"sm"}
      className={iconButtonVariants({
        variant: "none",
        size,
        className
      })}
    />
  }

  return <button className={iconButtonVariants({
    variant,
    size,
    disabled,
    className
  })}
    {...props}
  >
    <Icon svg={icon} className={iconButtonIconVariants({ variant, size })} />
  </button>
}

const iconButtonVariants = cva(`
    inline-flex items-center justify-center cursor-pointer
    transition group gap-2
  `, {
  variants: {
    variant: {
      none: "",
    },
    size: {
      sm: "p-1 rounded"
    },
    disabled: {
      true: "opacity-50 pointer-events-none"
    }
  },
  defaultVariants: {
    size: "sm",
    disabled: false
  }
})

const iconButtonIconVariants = cva("transition", {
  variants: {
    variant: {
      none: "",
      primary: "fill-yellow group-hover:fill-yellow-dark",
    },
    size: {
      sm: "size-8"
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  }
})
