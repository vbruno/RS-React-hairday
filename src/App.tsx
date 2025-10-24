import { BrowserRouter, Routes, Route } from "react-router"
import PageComponents from "./pages/PageComponents"
import PageHome from "./pages/PageHome"

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
