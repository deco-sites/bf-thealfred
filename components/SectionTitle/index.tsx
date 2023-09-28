export interface Props {
  symbol: string;
  text: string;
  markedText: string;
  invertMarkedText?: boolean;
}

const SectionTitle = (
  { symbol, text, markedText, invertMarkedText = false }: Props,
) => {
  return (
    <p class="mb-6  whitespace-nowrap text-xl sm:text-2xl">
      <span class="text-red-800">{symbol}</span>{" "}
      <span>
        <span class="text-gray-100">
          {text}
        </span>{" "}
        <span class="font-bold text-white">
          {markedText}
        </span>
      </span>
    </p>
  );
};

export default SectionTitle;
