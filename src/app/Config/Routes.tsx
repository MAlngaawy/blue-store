import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../../@main/component/ProtectedRoute";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import ReactApps from "../Pages/ReactApps";
import SignUp from "../Pages/SignUp";

export const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/react-apps",
    element: <ReactApps />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
];
