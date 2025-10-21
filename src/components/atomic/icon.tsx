import { cva, type VariantProps } from "class-variance-authority";
import React from "react";



const iconVariants = cva("fill-gray-400", {
  variants: {
    animate: {
      false: "",
      true: "animate-spin"
    }
  },
  defaultVariants: {
    animate: false
  }
})

interface IconProps extends React.ComponentProps<"svg">, VariantProps<typeof iconVariants> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({ svg: SvgComponent, className, animate, ...props }: IconProps) {
  return <SvgComponent className={iconVariants({ className, animate })} {...props} />
}
