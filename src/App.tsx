import Icon from "./components/atomic/icon"
import Button from "./components/atomic/button"
import Text from "./components/atomic/text"

import CalenderIcon from "./assets/icons/Calender.svg?react"
import CaretDownIcon from "./assets/icons/Caret-Down.svg?react"
import CaretLeftIcon from "./assets/icons/Caret-Left.svg?react"
import CaretRightIcon from "./assets/icons/Caret-Right.svg?react"
import CloudSunIcon from "./assets/icons/Cloud-Sun.svg?react"
import TrashIcon from "./assets/icons/Lixeira.svg?react"
import MoonStarsIcon from "./assets/icons/Moon-Stars.svg?react"
import SunHorizonIcon from "./assets/icons/Sun-Horizon.svg?react"
import UserSquareIcon from "./assets/icons/User-Square.svg?react"

function App() {

  return (
    <div className="bg-gray-800 text-white h-screen">
      <div className="flex justify-center items-center h-screen flex-col gap-2" >

        {/* Tipografia */}
        <div className="flex gap-3 flex-col">
          <Text variant={"title-lg"} >Teste de font title lg</Text>
          <Text variant={"title-md"}>Teste de font title md</Text>
          <Text variant={"title-sm"}>Teste de font title sm</Text>
          <Text variant={"text-md"}>Teste de font text md</Text>
          <Text variant={"text-sm"}>Teste de font text sm</Text>
        </div>

        {/* Icons */}
        <div className="flex justify-center items-center gap-3">
          <Icon svg={CalenderIcon} />
          <Icon svg={CaretDownIcon} />
          <Icon svg={CaretLeftIcon} />
          <Icon svg={CaretRightIcon} />
          <Icon svg={CloudSunIcon} />
          <Icon svg={TrashIcon} />
          <Icon svg={MoonStarsIcon} />
          <Icon svg={SunHorizonIcon} />
          <Icon svg={UserSquareIcon} />
        </div>

        {/* Button */}
        <div className="flex gap-3">
          <Button>agendar</Button>
          <Button disabled>agendar</Button>
        </div>

        {/* Button Icon */}
        <div></div>
      </div>
    </div>
  )
}

export default App
