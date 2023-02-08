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
import { NotificationsProvider } from "@mantine/notifications";
import { MantineProvider } from "@mantine/core";
function App() {
  return (
    <BrowserRouter>
      <MantineProvider withNormalizeCSS withGlobalStyles>
        <NotificationsProvider>
          <div className="App">
            <AuthProvider>
              <Layout />
            </AuthProvider>
          </div>
        </NotificationsProvider>
      </MantineProvider>
    </BrowserRouter>
  );
}

export default App;
