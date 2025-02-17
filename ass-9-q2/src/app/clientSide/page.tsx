"use client";
import React, { useEffect } from "react";
import { useState } from "react"; 
import Link from "next/link";



export default function ClientSidePage() {
    const [users, setUsers] = useState([]);
    async function getUsers() {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        return data;
    }
    // let users = await getUsers();
    useEffect(() => {
        getUsers().then((data) => {
            setUsers(data);
        });
    }, []);

    interface Users {
        id: number;
        title: string;
        image: string;
        description: string;
        category: string;
        price: number;
        rating: {
            rate: number;
            count: number;
        };
    }
    return (
        <div className="bg-blue-300 py-10  min-h-screen">
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 place-content-center ">
                {users.map((user: Users) => {
                    return (
                        <div
                            key={user.id}
                            className="bg-gray-800 text-white rounded-lg shadow-md transition-transform transform hover:scale-105"
                        ><Link href={`/clientSide/${user.id}`}>
                            <img
                                src={user.image}
                                alt={user.title}
                                className="w-full h-48 object-contain bg-white  rounded-lg"
                            //   style={{
                            //     width: "300px",
                            //     height: "300px",
                            //     objectFit: "cover",
                            //     borderRadius: "10px",
                            //     marginBottom: "20px",
                            //   }}
                            />
                            <div className="p-4 text-white">
                                <h3 className="text-2xl font-extrabold">{user.title}</h3>
                                <h4 className="font-medium hover:underline opacity-[80%]">
                                    {user.category}
                                </h4>
                                <p className="font-bold text-xl">Price:${user.price}</p>
                                <p className="font-semibold opacity-[80%]">
                                    {user.description}
                                </p>

                                <p className="opacity-[50%] mt-2">
          <strong>Rate:</strong>{" "}
          <span className="text-yellow-500">
            {"⭐".repeat(Math.round(user.rating.rate))}
          </span>
          <span className="text-gray-500 ml-2">
            ({user.rating.count} reviews)
          </span>
        </p>
                            </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
