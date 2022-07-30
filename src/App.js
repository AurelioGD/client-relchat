import { Routes, Route } from "react-router-dom"
import Menu from "./components/layout/Menu"
import Normalize from "./components/styled/Normalize"
import PublicChats from "./views/publicChats"

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/public-chats" element={<PublicChats />} />
      </Routes>
      <Normalize />
    </div>
  )
}

export default App
