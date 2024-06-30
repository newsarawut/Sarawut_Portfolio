import React from "react";
import notFound from "../../public/404.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-10/12 m-auto">
      <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between w-full">
        <div className="md:w-1/2 p-8">
          <img src={notFound} alt="Not Found" />
        </div>

        <div className="w-full md:w-1/2 p-4 md:p-8 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            404 Not Found
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Oops! The page you are looking for could not be found.
          </p>
          <Link
            to="/"
            className="rounded-xl border-2 border-black px-6 py-4 font-bold transition-all hover:-translate-y-0.5 dark:text-orange-500 dark:border-orange-500 hover:border-orange-500 hover:bg-orange-500 hover:text-white dark:hover:text-white"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
