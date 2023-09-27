export interface Props {
  buttonValue?: {
    value?: string;
    responsiveValue?: string;
  };
}

const Header = ({
  buttonValue = {
    value: "VER OFERTAS",
    responsiveValue: "OFERTAS",
  },
}: Props) => {
  return (
    <header className="bg-transparent absolute z-10 top-0 h-24 w-full flex justify-between items-center px-[8vw]">
      <img src="/thealfredlogo.png" alt="" width="80px" />
      <button className="rounded-3xl py-1 px-6 text-white bg-white bg-opacity-50">
        <span className="inline-flex sm:hidden">
          {buttonValue?.responsiveValue?.length
            ? buttonValue?.responsiveValue
            : buttonValue.value}
        </span>
        <span className="hidden sm:inline-flex">
          {buttonValue.value}
        </span>
      </button>
    </header>
  );
};

export default Header;
