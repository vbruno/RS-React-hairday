import { Outlet } from "react-router";

export default function layoutMain() {
  return (
    <div
      className="bg-gray-800"
    >
      <Outlet />
    </div>
  )
}
