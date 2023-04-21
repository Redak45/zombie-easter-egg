import { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const PrivateRoute = ({ path, ...props }) => {
  const { currentUser } = useContext(UserContext);

  return currentUser ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
