import { Input, Loader, PasswordInput } from "@mantine/core";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../store/user/userSlice";
import { useCallback, useEffect, useState } from "react";
//@ts-ignore
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { showNotification } from "@mantine/notifications";
type Props = {};

const SignUp = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("effect");
    const token = Cookies.get("token");
    if (token) {
      navigate("/");
    }
  }, []);

  // Firebase Signup User
  const createUser = (email: string, password: string) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(addUser(user));
        //@ts-ignore
        Cookies.set("token", user.accessToken);
        navigate("/");
        setLoading(false);
        showNotification({
          title: "Done",
          message: "user Created",
          color: "green",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        setLoading(false);
        showNotification({
          title: "Sorry",
          message: errorCode,
          color: "red",
        });
      });
  };

  const handleSignUp = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof email === "string" && typeof password === "string") {
      createUser(email, password);
    }

    console.log({ email, password });
  };

  return (
    <div className="my-10 py-5 flex text-center flex-col gap-6 justify-center items-center">
      <h1 className="text-xl">SignUp</h1>
      <form onSubmit={handleSignUp} className="flex flex-col gap-2">
        <Input name="email" autoFocus placeholder="E-mail" />
        {/* <Input name="name" placeholder="Name" /> */}
        <PasswordInput name="password" placeholder="Password" />
        <button className="py-2 bg-green-400 text-white font-bold text-xl rounded-md flex justify-center items-center">
          {loading ? <Loader size={"sm"} /> : "Create User"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
