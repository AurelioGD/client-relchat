import { Navigate } from "react-router-dom"
import useUser from "../hooks/contextConsumers/useUser"
import { ROUTES } from "../consts/routes"

const IfNotUserSessionExists = ({children}) => {
  const user = useUser()

  if(user){
    return <Navigate to={ROUTES.PUBLIC_CHATS}/>
  }

  return children
}

export default IfNotUserSessionExists