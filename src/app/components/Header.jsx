"use client";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const handleNavigate = (page) => {
    router.push(page);
  };
  return (
    <div className="flex gap-9 justify-center">
      <button
        className=" hover:bg-white/65 text-xl px-2 py-1 rounded-md"
        onClick={() => handleNavigate("/")}
      >
        Home
      </button>
      <button
        className=" hover:bg-white/65 text-xl px-2 py-1 rounded-md"
        onClick={() => handleNavigate("/productlist")}
      >
        All Products
      </button>
      <button
        className=" hover:bg-white/65 text-xl px-2 py-1 rounded-md"
        onClick={() => handleNavigate("/productlistserver")}
      >
        Server Products
      </button>
      <button
        className=" hover:bg-white/65 text-xl px-2 py-1 rounded-md"
        onClick={() => handleNavigate("/cart")}
      >
        Cart
      </button>
      <button
        className=" hover:bg-white/65 text-xl px-2 py-1 rounded-md"
        onClick={() => handleNavigate("/users")}
      >
        Users
      </button>
      <button
        className=" hover:bg-white/65 text-xl px-2 py-1 rounded-md"
        onClick={() => handleNavigate("/study")}
      >
        Study
      </button>
    </div>
  );
};

export default Header;
