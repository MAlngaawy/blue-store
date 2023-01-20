import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const TopBar = (props: Props) => {
  return (
    <div className="p-4 bg-blue-200 flex justify-between items-center">
      <div className="text-blue-500 font-extrabold text-4xl">
        blue <span className="text-xs">Store</span>
      </div>
      <ul className="navigation flex gap-4">
        <ListItem text="Home" link="/" />
        <ListItem text="Profile" link="/profile" />
        <ListItem text="React Apps" link="/react-apps" />
      </ul>
    </div>
  );
};

type ListItemProps = {
  text: string;
  link: string;
};
const ListItem = ({ text, link }: ListItemProps) => {
  return (
    <li className="text-white font-bold">
      <Link to={link}>{text}</Link>
    </li>
  );
};

export { TopBar };
