import React, { useState } from "react";
import { json, Link, NavLink } from "react-router-dom";
import cn from "classnames";
//@ts-ignore
import Cookies from "js-cookie";

type Props = {};

const TopBar = (props: Props) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="p-4 bg-blue-200 flex justify-between items-center">
      <div className="text-blue-500 font-extrabold text-4xl">
        blue <span className="text-xs">Store</span>
      </div>

      {/* Descktop View */}
      <div className="desctop hidden sm:block">
        <ul className="navigation flex gap-4">
          <ListItem text="Home" link="/" />
          <ListItem text="Profile" link="/profile" />
          <ListItem text="React Apps" link="/react-apps" />
          <AuthButtons />
        </ul>
      </div>

      {/* mobile View */}
      <div className="mobile sm:hidden">
        <div className="bar cursor-pointer" onClick={() => setShow(true)}>
          Open
        </div>
        <div
          className={cn(
            "sidebar h-screen absolute z-50  flex justify-center items-center right-0 top-0 bg-gray-100 w-60 transition-all transform translate-x-full ",
            {
              "transform-none shadow-xl": show,
            }
          )}
        >
          <div
            onClick={() => setShow(false)}
            className="close absolute right-4 top-4 cursor-pointer"
          >
            Close
          </div>
          <ul className="text-2xl navigation flex flex-col justify-center items-center gap-2">
            <ListItem setShow={setShow} text="Home" link="/" />
            <ListItem setShow={setShow} text="Profile" link="/profile" />
            <ListItem text="React Apps" link="/react-apps" />
            <AuthButtons />
          </ul>
        </div>
      </div>
    </div>
  );
};

type ListItemProps = {
  text: string;
  link: string;
  className?: string;
  setShow?: any;
};
const ListItem = ({ text, link, className, setShow }: ListItemProps) => {
  return (
    <li className={` text-gray-900`} onClick={() => setShow && setShow(false)}>
      <NavLink
        className={className}
        style={({ isActive }) =>
          isActive ? { fontWeight: "bold" } : { fontWeight: "400" }
        }
        to={link}
      >
        {text}
      </NavLink>
    </li>
  );
};

const AuthButtons = () => {
  const token = Cookies.get("token");

  if (!token) {
    return (
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <ListItem
          className="px-4 py-2 border border-black rounded-md"
          text="Sign Up"
          link="/sign-up"
        />
        <ListItem
          className="px-4 py-2 border border-black bg-black text-white rounded-md"
          text="Login"
          link="/login"
        />
      </div>
    );
  }

  return (
    <div
      onClick={() => {
        Cookies.set("token", "");
      }}
    >
      <ListItem
        className="px-4 py-2 text-red-400"
        text="logout"
        link="/login"
      />
    </div>
  );
};

export { TopBar };
