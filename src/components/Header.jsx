import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="relative z-40 mx-5 flex items-center py-5 font-bold transition-all">
      <div
        className="mx-auto flex w-full flex-row flex-wrap items-center justify-center sm:justify-between rounded-xl border-2 border-black
             dark:bg-[#1a1a1a] px-4 py-3 shadow-custom transition-all max-w-[50rem] gap-y-2 uppercase"
      >
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive
              ? "active-link text-2xl mx-3 py-1 dark:text-gray-50 transition-al "
              : "text-2xl mx-3 py-1 text-gray-800 dark:text-gray-50  transition-all hover:border-b-2 hover:border-orange-500 dark:hover:text-orange-500 hover:text-orange-500"
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
      </div>
    </header>
  );
};

export default Header;
