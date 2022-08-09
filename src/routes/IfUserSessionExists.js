import { Navigate } from "react-router-dom"
import useUser from "../hooks/contextConsumers/useUser"
import { ROUTES } from "../consts/routes"

const IfUserSessionExists = ({ children }) => {
  const user = useUser()

  if(!user){
    return <Navigate to={ROUTES.LOGIN}/>
  }

  return children
}

export default IfUserSessionExists
