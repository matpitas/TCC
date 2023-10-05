import { useContext } from "react"
import { UserContext } from "../Context/UserContext"


const useUserContext = () => {
    
    const User = useContext(UserContext)


    if(!User){
        throw new Error('Não há contextos.')
    }

    return User
}

export default useUserContext