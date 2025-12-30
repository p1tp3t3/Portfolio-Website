import { Outlet, Navigate } from "react-router-dom";
import { UserAuth } from "../context/auth-context";
import Reload from "./others/reload";

const UnProtectedRoute = () => {
  const { session } = UserAuth();

  // ⛔ Still checking auth → show loader only
  if (session === undefined) {
    return <Reload loading />;
  }

  // ✅ Already logged in → redirect away from login
  if (session) {
    return <Navigate to="/profile" replace />;
  }

  // ❌ Not logged in → allow access
  return (
    <>
      <Reload loading={false} />
      <Outlet />
    </>
  );
};

export default UnProtectedRoute;
