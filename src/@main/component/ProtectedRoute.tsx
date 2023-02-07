import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { getUserFn } from "../../app/store/user/userSlice";
import { Navigate, useNavigate } from "react-router-dom";

type Props = {
  children: ReactElement;
};

const ProtectedRoute = ({ children }: Props) => {
  const user = useSelector(getUserFn);
  const navigate = useNavigate();

  console.log(user.user);

  if (!user.user) {
    return <Navigate to={"/login"} />;
  } else {
    return <div>{children} </div>;
  }
};

export default ProtectedRoute;
