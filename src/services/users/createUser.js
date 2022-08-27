import { API_BASE_URL, API_ROUTES } from "../../consts/api"
import { generatePostConfig } from "../../utils/fetchConfigGenerators"
const { USER } = API_ROUTES

const createUser = async(userData) => {
    const config = generatePostConfig(userData)
    const rawDataResponse = await fetch(API_BASE_URL+USER, config)
    const userDataResponse = await rawDataResponse.json()
    return userDataResponse
}

export default createUser