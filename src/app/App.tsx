import {
  BrowserRouter,
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home";
import { router } from "./Config/Routes";
import Layout from "./Layout/Layout";
import { AuthProvider } from "./auth/AuthContext";
function App() {
  // return <RouterProvider router={router} />;
  return (
    <BrowserRouter>
      <div className="App">
        <AuthProvider>
          <Layout />
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
