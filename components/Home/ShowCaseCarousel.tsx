import Card from "../../islands/Card/index.tsx";
import Carousel from "../../islands/Carousel/index.tsx";

export interface Props {
  startMarkedText?: string;
  midText?: string;
  endMarkedText?: string;
}

const ShowCaseCarousel = ({
  startMarkedText = "%",
  midText = "DESTAQUES",
  endMarkedText = "BF23",
}) => {
  return (
    <div className="w-full sm:w-[297px] text-center">
      <p className="text-gray-300 text-lg mb-4">
        <span className="text-red-800">{startMarkedText}</span> {midText}{" "}
        <span className="font-bold text-white">{endMarkedText}</span>
      </p>
      <Carousel class="gap-4" isSingleVisibleItem>
        {Array(6).fill("").map(() => <Card />)}
      </Carousel>
    </div>
  );
};

export default ShowCaseCarousel;
