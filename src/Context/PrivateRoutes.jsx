import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate, useLocation } from "react-router";
import LoadingComponent from "../Components/Loading/LoadingComponent";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const { pathname } = useLocation();

  if (loading) {
    return <LoadingComponent></LoadingComponent>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={pathname} to="/log-in"></Navigate>;
  }
};

export default PrivateRoutes;
