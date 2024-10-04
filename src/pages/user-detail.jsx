import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const UserDetail = () => {
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [params.userId]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 pb-2">
          User Details
        </h1>
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-600">Name:</h2>
          <p className="text-gray-800 text-xl">{data.name}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-600">Email:</h2>
          <p className="text-gray-800 text-xl">{data.email}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-600">Username:</h2>
          <p className="text-gray-800 text-xl">{data.username}</p>
        </div>
      </div>
    </div>
  );
};
