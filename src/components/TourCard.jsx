import frame from "../assets/frame.png";
import light_frame from "../assets/light-frame.png";
import Rating from "./Rating";
export default function TourCard({ tour_package, frameType = "light" }) {
  return (
    <div>
      <div>
        <div className="max-w-[570px] relative">
          <img
            src={tour_package.image}
            alt={tour_package.title}
            className="w-full h-full object-cover"
          />
          {frameType === "light" ? (
            <img
              src={light_frame}
              alt="frame"
              className="absolute top-0  w-full h-full"
            />
          ) : (
            <img
              src={frame}
              alt="frame"
              className="absolute top-0 w-full h-full"
            />
          )}
        </div>
        <div className="px-4 mt-2">
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-sm xxs:text-base sm:text-xl">
              {tour_package.title}
            </h4>
            <Rating
              rating={tour_package.rating}
              className="text-orange-300 size-4"
            />
          </div>
          <div className="flex gap-4 mt-2">
            <p>${tour_package.price}</p>
            {tour_package?.priceOff && (
              <p className="line-through text-gray-400">
                ${tour_package?.priceOff}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
