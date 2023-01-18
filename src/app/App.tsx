import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import { router } from "./Config/Routes";
function App() {
  return <RouterProvider router={router} />;
}

export default App;
