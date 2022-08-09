import { POST_REQUEST_DEFAULT_SETTINGS } from "../consts/api"

export const generatePostConfig = (data) => ({
    ...POST_REQUEST_DEFAULT_SETTINGS,
    body: JSON.stringify(data)  
})

