import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

export default function Text({ as = "span", variant, className, children, ...props }: TextProps) {
  return React.createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props
    },
    children
  )
}

const textVariants = cva("font-sans text-gray-400", {
  variants: {
    variant: {
      "title-lg": "text-[2rem] font-bold leading-6",
      "title-md": "text-[1rem] font-bold leading-6",
      "title-sm": "text-[0.875rem] font-bold leading-5",
      "text-md": "text-[1rem] font-normal leading-6",
      "text-sm": "text-[0.875rem] font-normal leading-5",
    }
  },
  defaultVariants: {
    variant: "text-md"
  }
})
