import BlackFridayDescription, {
  Props as BlackFridayDescriptionProps,
} from "../components/Home/BlackFridayDescription.tsx";
import {
  Props as ShowCaseCarouselProps,
} from "../components/Home/ShowCaseCarousel.tsx";
import ShowCaseCarousel from "../islands/ShowCaseCarousel/index.tsx";
import BenefitBar, {
  Props as BenefitBarProps,
} from "../components/Home/BenefitBar.tsx";
import Header, { Props as HeaderProps } from "../components/Header/index.tsx";

interface Props {
  header?: HeaderProps;
  blackFridayDesciption?: BlackFridayDescriptionProps;
  showCaseCarousel?: ShowCaseCarouselProps;
  banefitBar?: BenefitBarProps;
}

export default function Home({
  header,
  blackFridayDesciption,
  showCaseCarousel,
  banefitBar,
}: Props) {
  return (
    <section
      style={{
        backgroundImage:
          "url('/backgroundTexture.png'), linear-gradient(to bottom, #5b0d0d, #151111)",
      }}
      className="min-h-screen md:h-screen w-full  bg-cover bg-no-repeat"
    >
      <Header {...header} />
      <div className=" w-full pt-28 h-full flex flex-col items-center justify-center gap-16 sm:px-[16vw]">
        <div className="flex flex-col md:flex-row items-center justify-center w-full md:items-start md:justify-between">
          <BlackFridayDescription {...blackFridayDesciption} />
          <ShowCaseCarousel {...showCaseCarousel} />
        </div>
        <div class="w-full px-3">
          <BenefitBar {...banefitBar} />
        </div>
      </div>
    </section>
  );
}
