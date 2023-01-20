import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import ReactApps from "../Pages/ReactApps";

export const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/react-apps",
    element: <ReactApps />,
  },
];
