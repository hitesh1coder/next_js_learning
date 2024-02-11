import Image from "next/image";
async function getProductList() {
  let data = await fetch("https://dummyjson.com/products");
  let res = await data.json();
  return res.products;
}

export default async function page() {
  let products = await getProductList();

  return (
    <div>
      <h1>Product list from server componets</h1>
      <div className="flex w-full h-full flex-wrap gap-4  justify-center items-center">
        {products?.map((item) => (
          <div
            className="bg-zinc-500 w-72 h-60 transition-all duration-500 hover:scale-105 cursor-pointer rounded-lg  p-2 flex flex-col justify-center items-center"
            key={item.id}
          >
            <Image
              loading="lazy"
              className="w-32 h-40 object-cover rounded-md"
              src={item.images[0]}
              width={200}
              height={300}
              alt={item.title}
            />
            <h1>{item.title}</h1>
            <h2>Price : {item.price} $</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
