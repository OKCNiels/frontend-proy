// import { useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useLocalStorage } from "react-use"

const ProtectedRoute = ({redirectPath='/login' }) => {

    
    // const [first, setfirst] = useState(localStorage.getItem("user"));
    const [first, setfirst] =  useLocalStorage("user");
    
    if (!first) {
        return <Navigate to={redirectPath} replace></Navigate>
    }

    return <Outlet />
}

export default ProtectedRoute