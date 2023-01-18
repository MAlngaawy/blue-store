import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
