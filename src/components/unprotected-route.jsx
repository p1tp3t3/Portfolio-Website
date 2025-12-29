import { Outlet, Navigate } from "react-router-dom";
import { UserAuth } from "../context/auth-context";

const UnProtectedRoute = () => {
    const { session } = UserAuth();

    if (session === undefined) {
        return <div>Loading...</div>;
    }

    // If logged in → kick them away from login
    return session ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default UnProtectedRoute;
