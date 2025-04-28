import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'


function PrivateRoute({children}) {

 const { authState } = useContext(AuthContext)
 const {token} = authState

 
 
    if (!token) {
        return <Navigate to = {"/login"}/>
    }
    else{
       return children;
       
    }


}

export default PrivateRoute;
