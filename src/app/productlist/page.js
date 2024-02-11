"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [product, setProduct] = useState([]);
  const fetchProducts = async () => {
    let data = await fetch("https://dummyjson.com/products");
    let res = await data.json();

    setProduct(res?.products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <div className="flex w-full h-full flex-wrap gap-4  justify-center items-center">
        {product?.map((item) => (
          <div
            className="bg-slate-50 w-72 h-60 transition-all duration-500 hover:scale-105 cursor-pointer rounded-lg text-blue-950 p-2 flex flex-col justify-center items-center"
            key={item.id}
          >
            <img
              className="w-40 h-40 object-cover"
              src={item.images[0]}
              alt={item.title}
            />
            <h1>{item.title}</h1>
            <h2 className="text-blue-950">{item.price} $</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
