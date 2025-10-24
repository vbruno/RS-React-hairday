import { BrowserRouter, Routes, Route } from "react-router"
import PageComponents from "./Pages/PageComponents"
import PageHome from "./Pages/PageHome"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/components" element={<PageComponents />} />
        <Route index element={<PageHome />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
