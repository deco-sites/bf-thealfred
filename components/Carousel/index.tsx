import SliderControllerJS from "../../islands/SliderJS/index.tsx";
import Slider from "../ui/Slider/index.tsx";
import Icon from "../ui/Icon.tsx";
import { useId } from "preact/hooks";
import type { JSX } from "preact";

type Props = JSX.IntrinsicElements["div"] & {
  hasControl?: boolean;
  isSingleVisibleItem?: boolean;
};

const Controls = () => {
  return (
    <>
      <div class="hidden sm:flex items-center justify-center z-10 col-start-1 row-start-2">
        <button
          class="h-12 w-12"
          data-slide="prev"
          aria-label="Previous item"
        >
          <Icon
            class="text-default-inverse text-red-600"
            size={30}
            id="ChevronLeft"
            strokeWidth={3}
          />
        </button>
      </div>
      <div class="hidden sm:flex items-center justify-center z-10 col-start-3 row-start-2">
        <button
          class="h-12 w-12"
          data-slide="next"
          aria-label="Next item"
        >
          <Icon
            class="text-default-inverse text-red-600"
            size={30}
            id="ChevronRight"
            strokeWidth={3}
          />
        </button>
      </div>
    </>
  );
};

const Carousel = (
  { children, class: _class, hasControl = true, isSingleVisibleItem = false }:
    Props,
) => {
  const id = useId();

  return (
    <div
      id={id}
      class={`w-full relative ${!isSingleVisibleItem && "px-[3vw]"} ${_class}`}
    >
      <Slider
        class={`col-span-full row-span-full scrollbar-none gap-4`}
      >
        {children}
      </Slider>

      {hasControl && <Controls />}

      <SliderControllerJS rootId={id} />
    </div>
  );
};

export default Carousel;
