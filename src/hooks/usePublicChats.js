import { useState, useEffect } from "react"
import getPublicChats from "../services/getPublicChats"

const usePublicChats = () => {
    const [publicChats, setPublicChats] = useState([])

    useEffect(() => {
        getPublicChats()
            .then(publicChatsData=> setPublicChats(publicChatsData))
            .catch(err => console.log(`Error: `, err))
    },[])

    return {publicChats}
}

export default usePublicChats