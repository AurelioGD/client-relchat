import Menu from "../Menu"
import BasicMenu from "../BasicMenu"
import { useContext } from "react"
import { UserContext } from "../../../contexts/UserProvider"

const MenuProvider = ({ children }) => {
  const user = useContext(UserContext)
  return (
    <>
      {user ? <Menu /> : <BasicMenu />}
      {children}
    </>
  )
}

export default MenuProvider
