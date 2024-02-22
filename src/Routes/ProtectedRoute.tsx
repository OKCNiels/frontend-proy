// import { useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useLocalStorage } from "react-use"

const ProtectedRoute = ({ redirectPath = '/login' }) => {


    // const [first, setfirst] = useState(localStorage.getItem("user"));
    const [first, setfirst] = useLocalStorage("usuario");

    if (!first) {
        return <Navigate to={ redirectPath } replace />
    }

    return <Outlet />
}

export default ProtectedRoute