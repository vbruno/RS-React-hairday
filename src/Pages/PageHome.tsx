import Text from "../components/atomic/text";
import Button from "../components/atomic/button";
import InputText from "../components/atomic/inputText";
import InputSelectTime from "../components/atomic/inputSelectTime";
import DatePicker from "../components/atomic/datePicker";
import Icon from "../components/atomic/icon";
import IconButton from "../components/atomic/iconButton";

import SunHorizonIcon from "../assets/icons/Sun-Horizon.svg?react"
import CloudSunIcon from "../assets/icons/Cloud-Sun.svg?react"
import MoonStarsIcon from "../assets/icons/Moon-Stars.svg?react"
import TrashIcon from "../assets/icons/Lixeira.svg?react"

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
            <DatePicker />
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
          flex flex-col items-center
          py-20 px-28 gap-8
          border border-yellow
        `}>
        {/* Header */}
        <div
          className="flex w-full justify-between"
        >
          <div
            className="flex flex-col gap-2"
          >
            <Text
              variant={"title-lg"}
              className="text-gray-100!"
            >Sua Agenda</Text>
            <Text
              variant={"text-sm"}
              className="text-gray-300!"
            >Consulte os seus cortes de cabelo agendados por dia</Text>
          </div>
          <DatePicker />
        </div>
        {/* Agenda */}
        <div
          className="flex flex-col w-full"
        >
          {/* Manha */}
          <div
            className="flex flex-col border border-solid border-gray-600 rounded-lg"
          >
            {/* Header */}
            <div
              className={`
                  flex items-center justify-between px-5 py-3 gap-3
                  border-b border-solid border-gray-600
                `}
            >
              <Icon
                className="size-5 fill-yellow-dark"
                svg={SunHorizonIcon} />
              <Text
                variant={"text-sm"}
                className="flex-1"
              >Manhã</Text>
              <Text>09h-12h</Text>
            </div>
            {/* List Clients */}
            <div
              className="flex flex-col p-5 gap-1"
            >
              {/* Client */}
              <div
                className="flex gap-5 py-1 justify-between items-center"
              >
                <Text
                  variant={"title-md"}
                  className="text-gray-200!"
                >11:00</Text>
                <Text
                  variant={"text-md"}
                  className="flex-1 text-gray-200!"
                >Ryan Dorwart</Text>
                <IconButton
                  className=""
                  icon={TrashIcon} />
              </div>
              {/* Client */}
              <div
                className="flex gap-5 py-1 justify-between items-center"
              >
                <Text
                  variant={"title-md"}
                  className="text-gray-200!"
                >11:00</Text>
                <Text
                  variant={"text-md"}
                  className="flex-1 text-gray-200!"
                >Ryan Dorwart</Text>
                <IconButton
                  className=""
                  icon={TrashIcon} />
              </div>
              {/* Client */}
              <div
                className="flex gap-5 py-1 justify-between items-center"
              >
                <Text
                  variant={"title-md"}
                  className="text-gray-200!"
                >11:00</Text>
                <Text
                  variant={"text-md"}
                  className="flex-1 text-gray-200!"
                >Ryan Dorwart</Text>
                <IconButton
                  className=""
                  icon={TrashIcon} />
              </div>
            </div>
          </div>
          {/* Tarde */}
          {/* Noite */}
        </div>
      </div>
    </div>
  )
}
