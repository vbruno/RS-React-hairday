import Text from "./text";
import Icon from "./icon";

import CalenderIcon from "../../assets/icons/Calender.svg?react"
import CaretDownIcon from "../../assets/icons/Caret-Down.svg?react"

export default function DatePicker() {
  return (
    <>
      {/* Pseudo Componente DataPicker [Preciso transformar isso em componentes] */}
      <div
        className={`
                  flex items-center justify-center
                  p-3 gap-2
                  border border-solid border-gray-500
                  transition
                  hover:border-yellow
                  rounded-lg
                `}
      >
        {/* icon */}
        <Icon
          className="size-5 fill-yellow"
          svg={CalenderIcon} />
        {/* texto */}
        <Text
          className="flex-1"
          variant={"text-md"}
        >10/01/2024</Text>
        {/* icon chevron baixo */}
        <Icon
          className="size-4 fill-gray-300"
          svg={CaretDownIcon} />
      </div>
    </>
  )
}
