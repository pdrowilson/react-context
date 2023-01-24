import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"


function App() {

  return (
    <div className="App">
      <BroserRouter>
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/about" element={About} />
          <Route path="*" element={NotFound} />
        </Routes>
      </BroserRouter>
    </div>
  )
}

export default App
