import { Outlet, Navigate } from "react-router-dom";
import { UserAuth } from "../context/auth-context";
import Reload from "./others/reload";

const ProtectedRoute = () => {
  const { session } = UserAuth();

  // ⛔ Block everything until session is resolved
  if (session === undefined) {
    return <Reload loading />;
  }

  // ❌ Not authenticated
  if (!session) {
    return <Navigate to="/login" replace />;
  }

  // ✅ Authenticated
  return (
    <>
      <Reload loading={false} />
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
