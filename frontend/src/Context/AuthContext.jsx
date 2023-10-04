import { createContext, useState } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [ login, setLogin ] = useState(false)

    return <AuthContext.Provider value={{login,setLogin}}>{children}</AuthContext.Provider>

}