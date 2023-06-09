import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


export const LoginButton = () => {
  const { isLoading, isAuthenticated, error, user, loginWithPopup, logout } =
    useAuth0();
  console.log(isAuthenticated, user);
  return (
    <button onClick={() => loginWithPopup()}>Login</button>
  );
};