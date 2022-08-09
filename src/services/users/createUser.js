import { API_BASE_URL } from "../../consts/api"
import { generatePostConfig } from "../../utils/fetchConfigGenerators"

const createUser = async(userData) => {
    const config = generatePostConfig(userData)
    const rawDataResponse = await fetch(`${API_BASE_URL}/user`, config)
    const userDataResponse = await rawDataResponse.json()
    return userDataResponse
}

export default createUser