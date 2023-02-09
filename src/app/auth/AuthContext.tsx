import React, { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { addUser, getUserFn } from "../store/user/userSlice";
import { useNavigate } from "react-router-dom";

type Props = {
  children: any;
};

//@ts-ignore
const UserContext = createContext();
// export const AuthContext = createContext();
export const AuthProvider = ({ children }: Props) => {
  // const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { user } = useSelector(getUserFn);
  const dispatch = useDispatch();

  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };
  const currentUser = auth.currentUser;
  console.log(currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      dispatch(addUser(currentUser));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
