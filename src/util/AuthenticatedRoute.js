import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// 토큰이 있으면 todo로 바로 이동
function AuthenticatedRoute() {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken ? <Navigate to="todo" /> : <Outlet />;
}

export default AuthenticatedRoute;
