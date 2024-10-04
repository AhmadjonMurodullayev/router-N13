import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="w-full bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-center gap-10 p-4">
        <Link
          to="/user"
          className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300"
        >
          User
        </Link>
        <Link
          to="/profile"
          className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300"
        >
          Profile
        </Link>
        <Link
          to="/"
          className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300"
        >
          Home
        </Link>
      </div>
    </div>
  );
};
