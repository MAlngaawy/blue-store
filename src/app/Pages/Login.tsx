import { Input, PasswordInput } from "@mantine/core";
import React from "react";

type Props = {};

const Login = (props: Props) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

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
