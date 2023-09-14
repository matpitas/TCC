
import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

const useAuthContext = () => {

    const Auth = useContext(AuthContext)

    if(!Auth){
        throw new Error('Não há contextos.')
    }


    return Auth
}

export default useAuthContext