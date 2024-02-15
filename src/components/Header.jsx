"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const handleNavigate = (page) => {
    router.push(page);
  };
  return (
    <div className="flex gap-9 justify-center">
      <button
        className={`${
          pathname === "/" && "bg-white/80 text-slate-900"
        } hover:bg-white/65 text-xl px-2 py-1 rounded-md`}
        onClick={() => handleNavigate("/")}
      >
        Home
      </button>
      <button
        className={`${
          pathname === "/productlist" && "bg-white/80 text-slate-900"
        } hover:bg-white/65 text-xl px-2 py-1 rounded-md`}
        onClick={() => handleNavigate("/productlist")}
      >
        CSR Products
      </button>
      <button
        className={`${
          pathname === "/productlistserver" && "bg-white/80 text-slate-900"
        } hover:bg-white/65 text-xl px-2 py-1 rounded-md`}
        onClick={() => handleNavigate("/productlistserver")}
      >
        SSR Products
      </button>
      <button
        className={`${
          pathname === "/cart" && "bg-white/80 text-slate-900"
        } hover:bg-white/65 text-xl px-2 py-1 rounded-md`}
        onClick={() => handleNavigate("/cart")}
      >
        Cart
      </button>
      <button
        className={`${
          pathname === "/users" && "bg-white/80 text-slate-900"
        } hover:bg-white/65 text-xl px-2 py-1 rounded-md`}
        onClick={() => handleNavigate("/users")}
      >
        Users
      </button>
    </div>
  );
};

export default Header;
