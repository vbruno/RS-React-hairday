import { BrowserRouter, Routes, Route } from "react-router"
import PageComponents from "./pages/PageComponents"
import PageHome from "./pages/PageHome"
import LayoutMain from "./layout/layoutMain"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<PageHome />} />
        </Route>
        <Route path="/components" element={<PageComponents />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
