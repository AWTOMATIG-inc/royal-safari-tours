import { GreenCircleIcon } from "./svg-icons";

export default function CounterWithText({ className, score, title }) {
  return (
    <div>
      <div className={`relative ${className}`}>
        <GreenCircleIcon />
        <h5 className="text-5xl font-bold absolute top-1/2 -translate-y-1/2 left-6">
          {score}
        </h5>
      </div>
      <p className="text-xl font-semibold mt-6">{title}</p>
    </div>
  );
}
