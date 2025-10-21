import { cva } from "class-variance-authority";

export const textVariants = cva("font-sans text-gray-400", {
  variants: {
    variant: {
      "title-lg": "text-[2rem] font-semibold leading-6",
      "title-md": "text-[1rem] font-semibold leading-6",
      "title-sm": "text-[0.875rem] font-semibold leading-5",
      "text-md": "text-[1rem] font-normal leading-6",
      "text-sm": "text-[0.875rem] font-normal leading-5",
    }
  },
  defaultVariants: {
    variant: "text-md"
  }
})
