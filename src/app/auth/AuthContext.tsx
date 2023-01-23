import React, { createContext, useState, useEffect } from "react";
import app from "../../firebase";

type Props = {};

// export const AuthContext = createContext();
export const AuthProvider = (props: Props) => {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   app.auth();
  // }, []);

  return <div>AuthProvider</div>;
};
