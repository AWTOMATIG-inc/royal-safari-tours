import { Link } from "react-router-dom";
import frame from "../assets/frame.png";
import light_frame from "../assets/light-frame.png";
import Rating from "./Rating";
export default function TourCard({ tour_package, frameType = "white", type }) {
  return (
    <div className="bg-white rounded-md px-3 sm:px-4 py-3">
      <div>
        <Link
          to={`/packages/${tour_package.id}`}
          state={{ tour_package }}
          className="max-w-[570px] relative block"
        >
          <img
            src={tour_package.image}
            alt={tour_package.title}
            className={`w-full h-[150px] sm:h-[200px]  object-cover ${
              type === "green" ? "md:h-[362px]" : "md:h-[462px]"
            }`}
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
        </Link>
        <div className="mt-2">
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-sm xxs:text-base sm:text-xl">
              {tour_package.title}
            </h4>
            {type !== "green" && (
              <Rating
                rating={tour_package.rating}
                className="text-orange size-3 sm:size-4 hidden sm:block"
              />
            )}
          </div>
          <div>
            <Rating
              rating={tour_package.rating}
              className={` size-3 sm:size-4 ${
                type === "green" ? "block text-green" : "text-orange sm:hidden"
              }`}
            />

            <div className="flex gap-4 mt-2 text-sm sm:text-base">
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
    </div>
  );
}
