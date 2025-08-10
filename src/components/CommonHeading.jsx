import { DoubleLocationIcon } from "./svg-icons";

export default function CommonHeading({ title, subtitle }) {
  return (
    <div className="text-center">
      <DoubleLocationIcon className="w-10 sm:w-fit mx-auto" />
      <h5 className="font-mansalva text-2xl sm:text-3xl mb-6 mt-2">
        {subtitle}
      </h5>
      <h1 className="font-palanquin font-bold text-4xl sm:text-5xl md:text-6xl">
        {title}
      </h1>
    </div>
  );
}
