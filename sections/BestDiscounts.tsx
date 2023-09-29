import Carousel from "deco-sites/start/islands/Carousel/index.tsx";
import ProductCard from "../components/ProductCard/index.tsx";
import SectionTitle from "../components/SectionTitle/index.tsx";
import type { Product } from "deco-sites/std/commerce/types.ts";

interface Props {
  products: Product[] | null;
}

export default function BestDiscounts({ products }: Props) {
  if (!products || products.length === 0) {
    return null;
  }

  console.log(products);

  return (
    <section className="bg-[#171111] flex w-full flex-col pt-10 px-[8vw] max-[768px]:pr-0">
      <div class="ml-[8vw]">
        <SectionTitle symbol="$" text="MAIORES" markedText="DESCONTOS" />
      </div>
      <Carousel products={products} />
    </section>
  );
}
