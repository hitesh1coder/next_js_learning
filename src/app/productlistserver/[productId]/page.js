import Image from "next/image";

async function getProductDetail(id) {
  let data = await fetch(`https://dummyjson.com/products/${id}`);
  let res = await data.json();
  return res;
}

export default async function Page({ params }) {
  const product = await getProductDetail(params.productId);

  return (
    <div className="flex w-full h-full  p-8">
      <div className="flex flex-col w-[50%]  gap-3">
        <Image
          className="w-96 h-80 rounded-lg"
          width={600}
          height={600}
          src={product.images[0]}
        />
        <div className="flex w-[50%] items-center justify-between gap-3">
          <Image
            className="w-40 h-32 rounded-lg"
            width={200}
            height={200}
            src={product.images[1]}
          />
          <Image
            className="w-40 h-32 rounded-lg"
            width={200}
            height={200}
            src={product.images[2]}
          />
          <Image
            className="w-40 h-32 rounded-lg"
            width={200}
            height={800}
            src={product.images[3]}
          />
        </div>
      </div>
      <div className="flex flex-col w-[50%] gap-3">
        <h1 className="text-4xl">{product.title}</h1>
        <h2 className="text-xl">{product.description}</h2>
        <div className="flex gap-3 font-light">
          <span>{product.brand}</span>
          <span>{product.category}</span>
        </div>
        <p className="text-3xl">Price : {product.price} $</p>
        <p className="text-2xl">Stock : {product.stock}</p>
        <div className="flex w-full justify-center gap-4 my-5">
          <button className="px-5 py-3 bg-orange-500 hover:bg-orange-800 rounded-lg">
            Add to Cart
          </button>
          <button className="px-5 py-3 bg-green-500 hover:bg-green-800 rounded-lg">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
