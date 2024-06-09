import React from "react";
import NavLinks from "../navlinks";
import { navList } from "../navlist";

const Navbar = () => {
  return (
    <nav
      role="navigation"
      className="relative flex items-center justify-between text-sm md:text-[.8vw] bg-transparent md:fixed w-full p-4"
    >
      <a href="/">
        <img src="/logo.svg" alt="raily logo" />
      </a>
      <NavLinks />
      <div className="">
        <MobileLinks />
      </div>
      <a href="/contact-us " className="hidden md:block">
        Contact us
      </a>
      <div className=" cursor-pointer md:hidden">
        <img src="/menu_button.svg" alt="menu button" />
      </div>
    </nav>
  );
};

export default Navbar;

const MobileLinks = () => {
  return (
    <menu className="absolute  w-[100%] mx-auto bg-black  top-[10vh] left-0 right-0  py-8">
      <ul className="text-white px-4 py-2  flex flex-col  bg-navbg rounded-3xl">
        {navList.map((link) => (
          <li className="hover:bg-navlink hover:outline-none py-[.5em] px-[1.9em] border border-transparent rounded-3xl ">
            <a href={link.url}> {link.name}</a>
          </li>
        ))}
      </ul>
    </menu>
  );
};
