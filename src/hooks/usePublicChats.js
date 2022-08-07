import { useState, useEffect } from "react"
import getPublicChats from "../services/chats/getPublicChats"

const usePublicChats = () => {
  const [publicChats, setPublicChats] = useState([])

  useEffect(() => {
    getPublicChats()
      .then((publicChatsData) => setPublicChats(publicChatsData))
      .catch((err) => console.log(`Error: `, err))
  }, [])

  return { publicChats }
}

export default usePublicChats
