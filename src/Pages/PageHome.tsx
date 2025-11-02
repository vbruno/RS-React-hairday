import Icon from "../components/atomic/icon";
import Text from "../components/atomic/text";

import CalenderIcon from "../assets/icons/Calender.svg?react"
import CaretDownIcon from "../assets/icons/Caret-Down.svg?react"
import Button from "../components/atomic/button";
import InputText from "../components/atomic/inputText";
import InputSelectTime from "../components/atomic/inputSelectTime";

export default function PageHome() {
  return (
    <div
      className="flex p-3 h-screen justify-center items-center gap-3"
    >
      {/* Schedule */}
      <div
        className={`
          basis-6/12 h-full
          bg-gray-700
          rounded-xl
          flex flex-col items-center
          p-20 gap-6
          border border-yellow
        `}>
        {/* Title */}
        <div
          className="flex flex-col w-full gap-3"
        >
          <Text
            variant={"title-lg"}
            className="text-gray-100!"
          >Agende um atendimento</Text>
          <Text
            variant={"text-sm"}
            className="text-gray-300!"
          >Selecione data, horário e informe o nome do cliente para criar o agendamento</Text>
        </div>

        {/* Form */}
        <div
          className="w-full flex flex-col gap-8"
        >
          {/* Data */}
          <div className="flex flex-col gap-1">
            <Text
              variant={"title-md"}
              className="text-gray-200!"
            >Data</Text>
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
            <div>

            </div>
          </div>
          {/* Horários */}
          <div>
            <Text
              variant={"title-md"}
              className="text-gray-200!"
            >Horários</Text>
            <div
              className="flex flex-col gap-2"
            >
              {/* Manhã */}
              <div
                className="flex flex-col gap-2"
              >
                <Text>Manhã</Text>
                <div
                  className="flex gap-2"
                >
                  <InputSelectTime timeValue="09:00" />
                  <InputSelectTime timeValue="10:00" disabled />
                  <InputSelectTime timeValue="11:00" />
                  <InputSelectTime timeValue="12:00" />
                </div>
              </div>
              {/* Tarde */}
              <div
                className="flex flex-col gap-2"
              >
                <Text>Tarde</Text>
                <div
                  className="flex gap-2"
                >
                  <InputSelectTime timeValue="13:00" disabled />
                  <InputSelectTime timeValue="14:00" disabled />
                  <InputSelectTime timeValue="15:00" />
                  <InputSelectTime timeValue="16:00" disabled />
                  <InputSelectTime timeValue="17:00" />
                  <InputSelectTime timeValue="18:00" />
                </div>
              </div>
              {/* Noite */}
              <div
                className="flex flex-col gap-2"
              >
                <Text>Noite</Text>
                <div
                  className="flex gap-2"
                >
                  <InputSelectTime timeValue="19:00" />
                  <InputSelectTime timeValue="20:00" selected />
                  <InputSelectTime timeValue="21:00" disabled />
                </div>
              </div>
            </div>
          </div>
          {/* Cliente */}
          <div>
            <Text
              variant={"title-md"}
              className="text-gray-200!"
            >Cliente</Text>
            <InputText

            />
          </div>
          {/* Button */}
          <Button
            className="w-full"
          >agendar</Button>
        </div>
      </div>

      {/* Agenda */}
      <div
        className={`
          basis-full h-full
          bg-transparent
          border border-yellow
        `}>
        <Text>Agenda</Text>
      </div>
    </div>
  )
}
