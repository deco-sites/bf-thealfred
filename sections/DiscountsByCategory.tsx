import Carousel from "../islands/Carousel/index.tsx";
import { DiscountCard } from "../components/DiscountCard/index.tsx";

type Category = {
  name: string;
  discount: number;
  link: string;
};

interface Props {
  categories?: Category[];
}

export default function DiscountsByCategory({
  categories = [
    { name: "ELETRODOMÉSTICOS", discount: 30, link: "#" },
    { name: "ELETRODOMÉSTICOS", discount: 30, link: "#" },
    { name: "ELETRODOMÉSTICOS", discount: 30, link: "#" },
    { name: "ELETRODOMÉSTICOS", discount: 30, link: "#" },
    { name: "ELETRODOMÉSTICOS", discount: 30, link: "#" },
    { name: "ELETRODOMÉSTICOS", discount: 30, link: "#" },
    { name: "ELETRODOMÉSTICOS", discount: 30, link: "#" },
    { name: "ELETRODOMÉSTICOS", discount: 30, link: "#" },
    { name: "ELETRODOMÉSTICOS", discount: 30, link: "#" },
    { name: "ELETRODOMÉSTICOS", discount: 30, link: "#" },
  ],
}: Props) {
  return (
    <section className="bg-[#171111] p-[8vw]">
      <p className="text-gray-100 w-full y-100 font-light text-2xl mb-11">
        <span className="text-red-800">%</span>{"  "}
        <span className="font-bold text-white">DESCONTOS</span>{"  "}
        POR CATEGORIA
      </p>

      {/* desktop design */}
      <div className="hidden md:grid overflow-hidden md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {categories.map((category) => {
          return (
            <DiscountCard
              category={category.name}
              discount={category.discount}
              link={category.link}
            />
          );
        })}
      </div>

      {/* mobile design */}
      <Carousel hasControl={false} class="grid md:hidden">
        {categories.map((category) => {
          return (
            <DiscountCard
              category={category.name}
              discount={category.discount}
              link={category.link}
            />
          );
        })}
      </Carousel>
    </section>
  );
}
