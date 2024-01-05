"use client";
import Image from "next/image";
import logo from "../assets/logo.png";
import SideMenu from "./SideMenu";
import { useState } from "react";

import menu from "@/assets/menu.svg";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  const showMenu = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <nav className="flex flex-col sticky top-0 left-0 z-20 bg-white">
      <div className="flex justify-between shadow px-8 py-3 items-center text-lg">
        <div className="flex items-center">
          <Image src={logo} width={48} height={48} alt="logo-image" />
          <h2 className="text-2xl px-4">Presto.it</h2>
        </div>

        <Image
          src={menu}
          width={32}
          height={32}
          alt="menu"
          className="md:hidden"
          onClick={showMenu}
        ></Image>

        <SideMenu className="hidden gap-4 items-center md:flex" />
      </div>
      <div className={`dropdown-container ${isClicked ? "dropdown-open":""} `}>
        <SideMenu className="overflow-hidden" />
      </div>
    </nav>
  );
}
