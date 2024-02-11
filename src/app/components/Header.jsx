"use client";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const handleNavigate = (page) => {
    router.push(page);
  };
  return (
    <div className="flex gap-2">
      <button
        className="text-black bg-white/90 hover:bg-white/65 px-3 py-1 rounded-md"
        onClick={() => handleNavigate("/")}
      >
        Home
      </button>
      <button
        className="text-black bg-white/90 hover:bg-white/65 px-3 py-1 rounded-md"
        onClick={() => handleNavigate("/productlist")}
      >
        All Products
      </button>
      <button
        className="text-black bg-white/90 hover:bg-white/65 px-3 py-1 rounded-md"
        onClick={() => handleNavigate("/productlistserver")}
      >
        Server Products
      </button>
      <button
        className="text-black bg-white/90 hover:bg-white/65 px-3 py-1 rounded-md"
        onClick={() => handleNavigate("/cart")}
      >
        Cart
      </button>
      <button
        className="text-black bg-white/90 hover:bg-white/65 px-3 py-1 rounded-md"
        onClick={() => handleNavigate("/users")}
      >
        Users
      </button>
      <button
        className="text-black bg-white/90 hover:bg-white/65 px-3 py-1 rounded-md"
        onClick={() => handleNavigate("/study")}
      >
        Study
      </button>
    </div>
  );
};

export default Header;
