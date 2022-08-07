import { useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Normalize from "./components/styled/Normalize"
import PublicChats from "./views/publicChats"
import MenuProvider from "./components/layout/providers/MenuProvider"
import UserProvider from "./contexts/UserProvider"
import Login from "./views/login"
import { ROUTES } from "./consts/routes"
import signOut from "./services/supabase/signOut"

function LogOut(){
  useEffect(() => {
    signOut()
  },[])
  return <Navigate to={ROUTES.LOGIN}/>
}

function App() {
  return (
    <div className="App">
      <UserProvider>
        <MenuProvider>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/public-chats" element={<PublicChats />} />
            <Route path="/log-out" element={<LogOut/>} />
          </Routes>
          <Normalize />
        </MenuProvider>
      </UserProvider>
    </div>
  )
}

export default App
