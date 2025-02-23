import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { images } from "../constants/index";
import { Button } from "@mui/material";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

// Navigation Items Data
const NavItemsInfo = [
  { name: "Home", type: "link" },
  { name: "Articles", type: "link" },
  { name: "Pages", type: "dropdown", items: ["About", "Contact Us"] },
  { name: "Pricing", type: "link" },
  { name: "Faq", type: "link" },
];

// Navigation Item Component
const NavItem = ({ item }) => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <li className="relative group">
      {item.type === "link" ? (
        <NavLink to="/" className="px-4 py-2">
          {item.name}
        </NavLink>
      ) : (
        <div className="flex flex-col items-center">
          {/* Dropdown Button */}
          <button
            className="px-4 py-2 flex gap-x-1 items-center"
            onClick={() => setDropDown((prev) => !prev)}
            aria-label={`${item.name} Dropdown`}
          >
            {item.name} <MdKeyboardArrowDown />
          </button>

          {/* Dropdown Menu */}
          <div
            className={`${
              dropDown ? "block" : "hidden"
            } lg:hidden transition-all duration-300 pt-2 lg:absolute lg:bottom-0 lg:right-0 lg:translate-y-full lg:group-hover:block w-max`}
          >
            <ul className="bg-slate-800 lg:bg-white text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
              {item.items.map((page) => (
                <NavLink
                  key={page}
                  to="/"
                  className="hover:bg-slate-800 hover:text-white px-4 py-2 text-slate-200 lg:text-slate-800"
                >
                  {page}
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

// Header Component
const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);

  return (
    <header className="container mx-auto px-5 flex justify-between items-center py-4">
      {/* Logo */}
      <div>
        <img className="w-10" src={images.logo} alt="logo" />
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden z-50">
        {navIsVisible ? (
          <AiOutlineClose
            className="w-6 h-6 cursor-pointer text-slate-400"
            onClick={() => setNavIsVisible(false)}
            aria-label="Close Menu"
          />
        ) : (
          <AiOutlineMenu
            className="w-6 h-6 cursor-pointer"
            onClick={() => setNavIsVisible(true)}
            aria-label="Open Menu"
          />
        )}
      </div>

      {/* Navigation Menu */}
      <nav
        className={`${
          navIsVisible ? "right-0" : "-right-full"
        } transition-all duration-300 lg:static bg-slate-800 lg:bg-transparent z-40 flex flex-col w-full lg:w-auto justify-center lg:flex-row fixed top-0 bottom-0 gap-x-9 items-center`}
      >
        <ul className="text-white lg:text-slate-800 items-center gap-y-5 flex flex-col lg:flex-row gap-x-5 font-semibold">
          {NavItemsInfo.map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
        </ul>

        {/* Sign In Button */}
        <Button
          sx={{
            mt: { xs: 2, lg: 0 },
            bgcolor: "primary.main",
            color: "white",
            "&:hover": { bgcolor: "primary.dark" },
          }}
          variant="contained"
        >
          Sign in
        </Button>
      </nav>
    </header>
  );
};

export default Header;
