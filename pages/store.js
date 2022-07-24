import Image from "next/image";

import { products } from "./product/products";

export default function Store() {
  return (
    <div className="p-1 bg-cyan-600">
      {products.map((product) => (
        <div className="grid grid-cols-3 m-4 border rounded-md bg-white" key={product.id}>
          <div className="flex justify-center items-center w-28 h-28">
            <Image
              src={product.image}
              alt={"Axolotl"}
              width={100}
              height={100}
              className="rounded-md"
            />
          </div>
          <div className="col-span-2 flex flex-col justify-between">
            <div>
              <h3 className="font-bold">{product.name}</h3>
              <p className="text-gray-500">{product.short}</p>
            </div>
            <div className="flex justify-between items-center">
              <span>{product.price}</span>
              <button
                class="snipcart-add-item rounded-md m-1 px-2 py-1 border-2 border-cyan-600 bg-cyan-300 text-cyan-600 hover:border-cyan-300 hover:bg-cyan-600 hover:text-cyan-300"
                data-item-id={product.id}
                data-item-name={product.name}
                data-item-description={product.description}
                data-item-price={product.price}
                data-item-image={product.image}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
