import { Input, PasswordInput } from "@mantine/core";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../store/user/userSlice";
import { useCallback } from "react";
type Props = {};

const SignUp = (props: Props) => {
  const auth = getAuth(app);
  const dispatch = useDispatch();

  // Firebase Signup User
  const createUser = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(addUser(user));
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Sign up Error Message", errorMessage);
        console.error("Sign up Error Code", errorCode);
      });
  };

  const handleSignUp = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const name = formData.get("name");
    const password = formData.get("password");

    if (typeof email === "string" && typeof password === "string") {
      createUser(email, password);
    }

    console.log({ email, name, password });
  };

  return (
    <div className="my-10 py-5 flex text-center flex-col gap-6 justify-center items-center">
      <h1 className="text-xl">SignUp</h1>
      <form onSubmit={handleSignUp} className="flex flex-col gap-2">
        <Input name="email" autoFocus placeholder="E-mail" />
        <Input name="name" placeholder="Name" />
        <PasswordInput name="password" placeholder="Password" />
        <button className="py-2 bg-green-400 text-white font-bold text-xl rounded-md">
          Create User
        </button>
      </form>
    </div>
  );
};

export default SignUp;
