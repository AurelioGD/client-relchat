import { createContext, useEffect, useState } from "react"
import supabase from "../config/supabase"
import { SUPABASE_AUTH_EVENTS } from "../consts/supabase"

const { SIGNED_IN, SIGNED_OUT } = SUPABASE_AUTH_EVENTS

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(supabase.auth.user())

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === SIGNED_IN) setUser(session.user)
      if (event === SIGNED_OUT) setUser(null)
    })
  }, [])

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

export default UserProvider
