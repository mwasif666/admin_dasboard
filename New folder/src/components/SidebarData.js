import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";
import { IoMdPeople } from "react-icons/io";
import { IoMdHelpCircle } from "react-icons/io";

const sidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <IoIosPaper />,
    cName: "nav-text"
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaCartPlus />,
    cName: "nav-text"
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoMdPeople />,
    cName: "nav-text"
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaEnvelopeOpenText />,
    cName: "nav-text"
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoMdHelpCircle />,
    cName: "nav-text"
  }
];

export default sidebarData;
