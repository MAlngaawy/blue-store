import { Input, PasswordInput } from "@mantine/core";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import app from "../../firebase";
import { addUser } from "../store/user/userSlice";

type Props = {};

const Login = (props: Props) => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  // Firebase Signup User
  const signInUser = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(addUser(user));
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Sign In Error Message", errorMessage);
        console.error("Sign In Error Code", errorCode);
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
        <button className="py-2 bg-blue-400 text-white font-bold text-xl rounded-md">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
