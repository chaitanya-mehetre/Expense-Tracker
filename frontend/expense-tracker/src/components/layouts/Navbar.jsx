import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SideMenu from "./SideMenu";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setopenSideMenu] = useState(false);
  return (
    <div className="flex items-center bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-7 sticky top-0 z-30 dark:bg-slate-900 dark:border-slate-800">
      <button
        className="block lg:hidden text-black dark:text-white"
        onClick={() => {
          setopenSideMenu(!openSideMenu);
        }}
      >
        {openSideMenu ? (
          <HiOutlineX className="text-2xl" />
        ) : (
          <HiOutlineMenu className="text-2xl" />
        )}
      </button>
      <h2 className="text-lg font-medium ml-5 lg:ml-0 text-black dark:text-white">
        Expense Tracker
      </h2>

      <div className="ml-auto">
        <ThemeToggle />
      </div>

      {openSideMenu && (
        <div className="fixed top-15.25 -ml-4 bg-white dark:bg-slate-900">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;