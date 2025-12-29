import { Outlet, Navigate } from "react-router-dom"

const ProtectedRoute = () => {
    const isAuth = window.localStorage.getItem('is-auth')

    return isAuth ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoute