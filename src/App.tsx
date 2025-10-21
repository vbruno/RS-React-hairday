import Icon from "./components/atomic/icon"

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
    <div className="bg-gray-900 text-white h-screen">
      <div className="flex justify-center items-center h-screen flex-col gap-2" >

        <div className="flex gap-3 flex-col">
          <p>Teste de font</p>
          <p className="text-title-lg" >Teste de font title lg</p>
          <p className="text-title-md" >Teste de font title md</p>
          <p className="text-title-sm" >Teste de font title sm</p>
          <p className="text-text-md" >Teste de font text md</p>
          <p className="text-text-sm" >Teste de font text sm</p>
        </div>

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
      </div>
    </div>
  )
}

export default App
