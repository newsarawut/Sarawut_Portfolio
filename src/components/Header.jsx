import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdSunny } from "react-icons/md";

const Header = () => {
  return (
    <header className="relative z-40 mx-5 flex items-center py-5 font-bold transition-all">
      <div
        className="mx-auto flex w-full flex-row flex-wrap items-center justify-center sm:justify-between rounded-xl border-2 border-black
             dark:bg-[#1a1a1a] px-4 py-3 shadow-custom transition-all max-w-[50rem] gap-y-2"
      >
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive
              ? "active-link text-2xl mx-3 py-1 dark:text-gray-50 transition-al"
              : "text-2xl mx-3 py-1 text-gray-800 dark:text-gray-50 transition-all hover:border-b-2 hover:border-orange-500 dark:hover:text-orange-500 hover:text-orange-500"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive
              ? "active-link text-2xl mx-3 py-1 dark:text-gray-50 transition-al"
              : "text-2xl mx-3 py-1 text-gray-800 dark:text-gray-50 transition-all hover:border-b-2 hover:border-orange-500 dark:hover:text-orange-500 hover:text-orange-500"
          }
                  >
          About
        </NavLink>
        <NavLink
          to="skills"
          className={({ isActive }) =>
            isActive
              ? "active-link text-2xl mx-3 py-1 dark:text-gray-50 transition-al"
              : "text-2xl mx-3 py-1 text-gray-800 dark:text-gray-50 transition-all hover:border-b-2 hover:border-orange-500 dark:hover:text-orange-500 hover:text-orange-500"
          }
                  >
          Skills
        </NavLink>
        <NavLink
          to="projects"
          className={({ isActive }) =>
            isActive
              ? "active-link text-2xl mx-3 py-1 dark:text-gray-50 transition-al"
              : "text-2xl mx-3 py-1 text-gray-800 dark:text-gray-50 transition-all hover:border-b-2 hover:border-orange-500 dark:hover:text-orange-500 hover:text-orange-500"
          }        >
          Projects
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive
              ? "active-link text-2xl mx-3 py-1 dark:text-gray-50 transition-al"
              : "text-2xl mx-3 py-1 text-gray-800 dark:text-gray-50 transition-all hover:border-b-2 hover:border-orange-500 dark:hover:text-orange-500 hover:text-orange-500"
          }        >
          Contact
        </NavLink>
        {/* <div className="flex items-center justify-center rounded-xl border-2 border-black
             dark:bg-[#1a1a1a] px-4 py-3 shadow-custom transition-all">
          {theme === "light" ? (
          <MdSunny className="w-5 h-5 cursor-pointer transition-all fill-yellow-500 hover:opacity-80 " />
           ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 cursor-pointer transition-all hover:opacity-80 fill-yellow-200"
            >
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                clipRule="evenodd"
              />
            </svg>
          )} 
        </div> */}
      </div>
    </header>
  );
};

export default Header;
