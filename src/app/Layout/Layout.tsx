import { Navbar } from "@mantine/core";
import React from "react";
import { Outlet, useRoutes } from "react-router-dom";
import { router } from "../Config/Routes";
import TopBar from "./Components/TopBar";

type Props = {};

const Layout = (props: Props) => {
  const content = useRoutes(router);

  return (
    <main className="min-h-screen bg-gray-100">
      <TopBar />
      <div className="w-11/12 sm:w-4/5 mx-auto max-w-7xl pt-10">{content}</div>
    </main>
  );
};

export default Layout;
