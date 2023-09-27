import { useState } from "preact/hooks";

const Card = () => {
  const [showButton, setShowButton] = useState(false);

  return (
    <div className="w-[297px] h-[444px] shrink-0 rounded-md bg-white p-4 select-none">
      <div className="relative mb-1">
        <img
          onMouseOver={() => setShowButton(true)}
          onMouseLeave={() => setShowButton(false)}
          className="w-full"
          src="https://arquivos.respondeai.com.br/seo/2022/a9b47b5b-2ab3-49f6-8f2d-c37d9a2031a8.webp"
          alt=""
        />
        {showButton &&
          (
            <button className="py-1 absolute left-2/4 -translate-x-2/4 bottom-1 w-52 rounded-3xl bg-pink-600 text-white text-lg">
              comprar
            </button>
          )}
      </div>
      <div className="flex flex-col items-start ">
        <p className="font-bold">Jaqueta Puffer Jaqueta Puffer</p>
        <div className="flex gap-1">
          <span className="font-medium line-through">R$ 356,00</span>
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
};

export default Card;
