import Image from "next/image";
import React from "react";

type ClientProps = {
  params: {
    id: string;
  };
};

type ProductData = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

async function Client({ params }: ClientProps) {
  const { id } = params;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return <div>Error fetching product data</div>;
  }

  const data: ProductData = await response.json();

  // Handle missing or undefined properties
  if (!data || !data.image || !data.title) {
    return <div>Error: Product data is missing or incomplete</div>;
  }

  return (
    <div className="bg-blue-300 py-10 min-h-screen">
      <div className="max-w-md mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-lg p-4 hover:scale-105">
        <Image
          src={data.image}
          alt={data.title}
          width={300}
          height={300}
          className="w-full h-48 object-contain bg-white rounded-lg"
        />
        <div className="p-4 text-white">
          <h3 className="text-2xl font-extrabold">{data.title}</h3>
          <h4 className="font-medium hover:underline opacity-[80%]">
            {data.category}
          </h4>
          <p className="font-bold text-xl">Price: ${data.price}</p>
          <p className="font-semibold opacity-[80%]">{data.description}</p>

          <p className="opacity-[50%] mt-2">
            <strong>Rate:</strong>{" "}
            <span className="text-yellow-500">
              {"⭐".repeat(Math.round(data.rating.rate))}
            </span>
            <span className="text-gray-500 ml-2">
              ({data.rating.count} reviews)
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Client;
