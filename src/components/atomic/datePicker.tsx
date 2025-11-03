import React from "react"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Icon from "./icon"

import CalenderIcon from "../../assets/icons/Calender.svg?react"
import CaretDownIcon from "../../assets/icons/Caret-Down.svg?react"

export default function DatePicker() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            id="date"
            className={`
                  flex items-center justify-center
                  p-3 gap-2
                  border border-solid border-gray-500
                  transition
                  hover:border-yellow
                  rounded-lg
                `}
          >
            <Icon
              className="size-5 fill-yellow"
              svg={CalenderIcon} />
            {date ? date.toLocaleDateString() : "Selecione uma data"}
            <Icon
              className="size-4 fill-gray-300"
              svg={CaretDownIcon} />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
