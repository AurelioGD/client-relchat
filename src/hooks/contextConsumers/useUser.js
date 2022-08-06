import { useContext } from "react"
import { UserContext } from "../../contexts/UserProvider"

const useUser = () => {
  const user = useContext(UserContext)
  return user
}

export default useUser
