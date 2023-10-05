import { createContext } from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import { useEffect } from "react";
import useAuthContext from "../Hooks/useAuthContext";


export const UserContext = createContext()

export const UserContextProvider = ({children}) => {

    const {login, setLogin} = useAuthContext()

    const [user, setUser] = useState({});

    useEffect(() => {
        if(!Cookies.get('email') && !Cookies.get('nome')) {
            setUser({
                name: Cookies.get('nome'),
                email: Cookies.get('email')
            });
        }

        if(Cookies.get('email') && Cookies.get('nome') || user.name == 'undefined'){
            setLogin(!login)
            setUser({
                name: Cookies.get('nome'),
                email: Cookies.get('email')
            });
        }
    }, []);

    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>


}