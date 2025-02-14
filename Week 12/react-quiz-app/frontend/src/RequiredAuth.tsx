import React from "react";
import { useAuthentication } from "./context/AuthenticationProvider";
import { Navigate } from "react-router-dom";

type PropsType = {
  children: React.ReactElement;
};
export default function RequiredAuth({ children }: PropsType) {
  const authResult = useAuthentication();
  if (!authResult?.authData) {
    console.log("No USER!");
    return <Navigate to="/login" replace />;
  }
  return children;
}
