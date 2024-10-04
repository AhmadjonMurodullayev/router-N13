import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const User = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 container mx-auto p-6">
        {data.map((item) => (
          <Link
            key={item.id}
            to={`/user/detail/${item.id}`}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <h1 className="text-xl font-semibold text-gray-800">{item.name}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};
