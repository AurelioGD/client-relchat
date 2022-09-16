import { API_BASE_URL, API_ROUTES } from "../../consts/api"
const { CHAT } = API_ROUTES
const { PUBLIC_CHATS }  = CHAT

const getPublicChats = async () => {
  const rawData = await fetch(API_BASE_URL+PUBLIC_CHATS)
  const publicChatsData = await rawData.json()
  return publicChatsData
}

export default getPublicChats
