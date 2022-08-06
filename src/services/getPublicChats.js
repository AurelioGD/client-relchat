import apiConfig from "../consts/api"
const { API_BASE_URL } = apiConfig

const getPublicChats = async () => {
  const rawData = await fetch(`${API_BASE_URL}/public/chats`)
  const publicChatsData = await rawData.json()
  return publicChatsData
}

export default getPublicChats
