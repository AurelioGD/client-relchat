import { API_BASE_URL } from "../../consts/api"

const getPublicChats = async () => {
  const rawData = await fetch(`${API_BASE_URL}/public/chats`)
  const publicChatsData = await rawData.json()
  return publicChatsData
}

export default getPublicChats
