import { Input, Loader, PasswordInput } from "@mantine/core";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import app from "../../firebase";
import { addUser, getUserFn } from "../store/user/userSlice";

//@ts-ignore
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { showNotification } from "@mantine/notifications";

type Props = {};

const Login = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useSelector(getUserFn);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  const auth = getAuth(app);
  const dispatch = useDispatch();
  // Firebase Signup User
  const signInUser = (email: string, password: string) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(addUser(user));
        navigate("/");
        setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoading(false);
        showNotification({
          title: "Sorry",
          message: errorCode,
          color: "red",
        });
      });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof email === "string" && typeof password === "string") {
      signInUser(email, password);
    }

    console.log({ email, password });
  };

  return (
    <div className="my-10 py-5 flex text-center flex-col gap-6 justify-center items-center">
      <h1 className="text-xl">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <Input name="email" autoFocus placeholder="E-mail" />
        <PasswordInput name="password" placeholder="Password" />
        <button className="py-2 bg-blue-400 text-white font-bold text-xl rounded-md flex justify-center items-center">
          {loading ? <Loader size={"sm"} /> : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
