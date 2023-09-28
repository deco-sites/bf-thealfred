import type { Product } from "deco-sites/std/commerce/types.ts";

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  const {
    image: images,
  } = product;

  return (
    <div className="w-[297px] h-[444px] shrink-0 rounded-md bg-white select-none">
      <div className="relative mb-1 h-52 w-full">
        <img
          src={images?.[0].url || ""}
          alt=""
          width="100%"
          class="rounded-t-md h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start p-4">
        <p className="font-bold">{product.isVariantOf?.name}</p>
        <div className="flex gap-1">
          <span className="font-medium line-through"></span>
          <div className="rounded-2xl bg-green-600 text-white px-2">
            30%
          </div>
        </div>
        <span className="font-bold text-lg ">R$ 250,00</span>
        <p className="text-gray-500 text">3X S/Juros De R$ 80,50 No Cartão</p>
        <div className="my-5 flex flex-col">
          <span className="text-purple-600 font-semibold">Black Friday</span>
          <span className="text-red-600 font-semibold">Outlet</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
