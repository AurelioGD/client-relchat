export const API_BASE_URL = process.env.REACT_APP_API_URL

export const API_ROUTES = {
  USER: "/user",
  CHAT: {
      ROOT:"/chat",
      PUBLIC_CHATS: "/chat/public-chats",
      MEMBERS:"/chat/:chatId/members",
  }
}

export const POST_REQUEST_DEFAULT_SETTINGS = {
  method: "POST",
  body: "",
  headers: {
    "Content-Type": "application/json",
  },
}
