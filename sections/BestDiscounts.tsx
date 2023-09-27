import Carousel from "deco-sites/start/islands/Carousel/index.tsx";
import Card from "../components/Card/index.tsx";

export default function BestDiscounts() {
  return (
    <section className="bg-[#171111] flex w-full flex-col pt-10">
      <div>
        <p className="text-gray-100 text-2xl mb-6 ml-[8vw]">
          <span className="text-red-800">%</span> MAIORES{" "}
          <span className="font-bold text-white">DESCONTOS</span>
        </p>
      </div>
      <Carousel>
        {Array(6).fill("").map(() => <Card />)}
      </Carousel>
    </section>
  );
}
