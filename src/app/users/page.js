import Link from "next/link";
import Hero from "../../components/Hero";

const page = () => {
  return (
    <div className="flex flex-col  w-full flex-wrap justify-center items-center">
      <Hero content="Users List" />
      <ul>
        <Link href="/users/Hitesh">
          <li>Hitesh</li>
        </Link>
        <Link href="/users/Shiya">
          <li>Shiya</li>
        </Link>
        <Link href="/users/Swara">
          <li>Swara</li>
        </Link>
        <Link href="/users/Rish">
          <li>Rishi</li>
        </Link>
        <Link href="/users/Naina">
          <li>Naina</li>
        </Link>
      </ul>
    </div>
  );
};

export default page;
