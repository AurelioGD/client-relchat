import { Routes, Route } from "react-router-dom"
import Normalize from "./components/styled/Normalize"
import PublicChats from "./views/publicChats"
import MenuProvider from "./components/layout/providers/MenuProvider"
import UserProvider from "./contexts/UserProvider"
import Login from "./views/login"

function App() {
  return (
    <div className="App">
      <UserProvider>
        <MenuProvider>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/public-chats" element={<PublicChats />} />
          </Routes>
          <Normalize />
        </MenuProvider>
      </UserProvider>
    </div>
  )
}

export default App
