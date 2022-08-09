import { useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Normalize from "./components/styled/Normalize"
import PublicChats from "./views/publicChats"
import MenuProvider from "./components/layout/providers/MenuProvider"
import UserProvider from "./contexts/UserProvider"
import Login from "./views/login"
import Signup from "./views/signup"
import IfUserSessionExists from "./routes/IfUserSessionExists"
import IfNotUserSessionExists from "./routes/IfNotUserSessionExists"
import signOut from "./services/supabase/signOut"
import { ROUTES } from "./consts/routes"

function LogOut() {
  useEffect(() => {
    signOut()
  }, [])
  return <Navigate to={ROUTES.LOGIN} />
}

function App() {
  return (
    <div className="App">
      <UserProvider>
        <MenuProvider>
          <Routes>
            <Route path={ROUTES.ROOT} element={<Navigate to={ROUTES.LOGIN} />} />
            <Route
              path={ROUTES.LOGIN}
              element={
                <IfNotUserSessionExists>
                  <Login />
                </IfNotUserSessionExists>
              }
            />
            <Route
              path={ROUTES.SIGN_UP}
              element={
                <IfNotUserSessionExists>
                  <Signup />
                </IfNotUserSessionExists>
              }
            />

            <Route
              path={ROUTES.PUBLIC_CHATS}
              element={
                <IfUserSessionExists>
                  <PublicChats />
                </IfUserSessionExists>
              }
            />
            <Route
              path={ROUTES.LOG_OUT}
              element={
                <IfUserSessionExists>
                  <LogOut />
                </IfUserSessionExists>
              }
            />
          </Routes>
          <Normalize />
        </MenuProvider>
      </UserProvider>
    </div>
  )
}

export default App
