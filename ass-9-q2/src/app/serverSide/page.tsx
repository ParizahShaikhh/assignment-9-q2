import React from "react";

export default async function ServerSidePage() {
  async function getUsers() {
    const response = await fetch("https://simple-books-api.glitch.me/books/");
    if (!response.ok) {
      throw new Error("Failed to fetch id's.");
    }
    const data = await response.json();
    return data;
  }
  const users = await getUsers();

  interface User {
    id: number;
    name: string;
    type: string;
    available: boolean;
  }

  return (
    <div className="bg-blue-300 min-h-screen p-6 ">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6 place-content-center ">
        {users.map((user: User) => {
          return (
            <div
              key={user.id}
              className=" bg-gray-800 text-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <h2 className="opacity-[50%]">{user.id}</h2>
              <h3 className="font-extrabold text-2xl hover:underline hover:text-blue-500">
                {user.name}
              </h3>
              <p className="font-semibold">Type: {user.type}</p>
              <p className="font-semibold hover:text-blue-300">Available: {user.available ? "True" : "False"}
              </p>
              {/* <h4>{user.category}</h4> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
