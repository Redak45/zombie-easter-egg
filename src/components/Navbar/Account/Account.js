import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../../context/userContext";


const Account = ({ path, ...props }) => {
  const { currentUser } = useContext(UserContext);
  console.log("Private", currentUser)

  if (!currentUser) {
    return <Navigate to="/" />
  }

  return (
    <Outlet />
  )


};

export default Account;

