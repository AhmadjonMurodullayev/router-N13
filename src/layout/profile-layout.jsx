import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function ProfileLayout() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 grid grid-cols-1 lg:grid-cols-5 gap-6">
      <div className="bg-white shadow-lg rounded-lg p-6 lg:col-span-1 flex flex-col gap-6">
        <Link
          to="/profile"
          className="text-lg font-semibold text-gray-700 hover:text-blue-500 transition duration-200"
        >
          Profile
        </Link>
        <Link
          to="/profile/change-addres"
          className="text-lg font-semibold text-gray-700 hover:text-blue-500 transition duration-200"
        >
          Change Address
        </Link>
        <Link
          to="/profile/change-profile"
          className="text-lg font-semibold text-gray-700 hover:text-blue-500 transition duration-200"
        >
          Change Profile
        </Link>
        <Link
          to="/profile/create-addres"
          className="text-lg font-semibold text-gray-700 hover:text-blue-500 transition duration-200"
        >
          Create Address
        </Link>
      </div>
      <div className="lg:col-span-4 bg-white shadow-lg rounded-lg p-6">
        <Outlet />
      </div>
    </div>
  );
}
