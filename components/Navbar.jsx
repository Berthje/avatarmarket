import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { navLinks } from "../utils/data";
import { RiUserLine, RiMenuLine } from "react-icons/ri";
import { FiMinimize, FiSearch } from "react-icons/fi";
import { FaReddit, FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { TbWallet } from "react-icons/tb";

const Navbar = () => {
  const router = useRouter();
  const [nav, setNav] = useState(false);

  return (
    <header className=" text-white w-full px-6 py-4 flex items-center justify-between">
      {/* Brand Name */}
      <div>
        <h2 className="font-[CalSans] tracking-tighter text-3xl">
          avatarmarket
        </h2>
      </div>
      <div className="hidden xl:flex items-center justify-between w-full px-24">
        {/* Search Bar */}
        <form className="relative w-2/4">
          <FiSearch className="absolute top-2/4 left-2 -translate-y-2/4" />
          <input
            type="search"
            name="searchquery"
            id="searchquery"
            placeholder="Search"
            className="bg-[#D9D9D9]/20 rounded-md py-2 px-8 outline-none border-none w-full"
          />
        </form>
        {/* Menu */}
        <nav className="w-3/5 flex justify-end">
          <ul className="flex">
            {navLinks.map((link, index) => {
              const activeStyle = link.path === router.pathname ? "active" : "";
              return (
                <li
                  key={index}
                  className={`font-[CalSans] ${activeStyle} ml-5`}
                >
                  <Link href={link.path} className="hover:text-[#785ACE]">
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {/* Right Part (navigation) */}
      <div className="flex items-center">
        {/* Connect Wallet Account Page */}
        <div className="bg-white/25 rounded-full p-3 mr-3">
          <TbWallet className="text-xl" />
        </div>
        {/* Circle Account Page */}
        <div className="bg-white/25 rounded-full p-3 mr-6">
          <RiUserLine className="text-xl" />
        </div>
        <RiMenuLine
          onClick={() => setNav(!nav)}
          className="xl:hidden text-2xl"
        />
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "bg-[#0E1130] fixed top-0 right-0 w-full h-screen z-10 duration-100 py-5 px-6"
            : "bg-[#0E1130] fixed top-0 right-[-100%] w-full h-screen z-10 duration-100 py-8 px-6"
        }
      >
        {/* Top */}
        <div className="w-full flex justify-between items-center mb-8">
          <h2 className="font-[CalSans] tracking-tighter text-3xl">
            avatarmarket
          </h2>
          <div className="bg-white/25 rounded-full p-2">
            <FiMinimize size={20} onClick={() => setNav(!nav)} />
          </div>
        </div>
        <form className="relative mb-12">
          <FiSearch className="absolute top-2/4 left-2 -translate-y-2/4" />
          <input
            type="search"
            name="searchquery"
            id="searchquery"
            placeholder="Search"
            className="bg-[#D9D9D9]/20 rounded-md py-2 px-8 outline-none border-none w-full"
          />
        </form>
        <nav>
          <ul>
            {navLinks.map((link, index) => {
              const activeStyle = link.path === router.pathname ? "active" : "";
              return (
                <li
                  key={index}
                  className={`font-[CalSans] mb-4 ${activeStyle}`}
                >
                  <Link href={link.path}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <button
          type="button"
          className="w-full py-3 radial-bg rounded-full text-center font-[CalSans] text-xl my-6"
        >
          Connect Wallet
        </button>
        {/* Icons */}
        <div className="w-full flex justify-center border-t-2 border-[#2F3356] py-4">
          <FaDiscord size={25} className="mx-4 text-[#8A8783]" />
          <FaTelegramPlane size={25} className="mx-4 text-[#8A8783]" />
          <FaReddit size={25} className="mx-4 text-[#8A8783]" />
        </div>
        <p className="text-center mt-12 font-bold">
          Avatarmarket is neither a creation of, nor an affiliation with Reddit
          and OpenSea.
        </p>
      </div>
    </header>
  );
};

export default Navbar;
