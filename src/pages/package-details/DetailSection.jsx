import { Icon } from "@iconify/react";
import Rating from "../../components/Rating";
import {
  BookingCardIcon,
  FireIcon,
  PaymentIcon,
} from "../../components/svg-icons";
export default function DetailSection({ packages }) {
  return (
    <section className="container py-20">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-2 gap-10">
          <div className="grid grid-cols-[1fr_80px] gap-4 items-center">
            <img src={packages?.image} alt={packages.name} />
            <div className="space-y-4">
              <img
                src={packages?.image}
                alt={packages.name}
                className="border-green border px-1"
              />
              <img
                src={packages?.image}
                alt={packages.name}
                className="border-green border px-1"
              />
              <img
                src={packages?.image}
                alt={packages.name}
                className="border-green border px-1"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4">
              <Rating rating={packages.rating} className="text-yellow-400" />
              <div className="flex gap-2 items-center">
                <FireIcon />
                <p className="text-green font-medium">
                  29 sold In Last 7 Hours
                </p>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-3xl my-6">51,000BDT</h5>
              <p className="leading-[26px]">
                Step into the vibrant cityscape of Singapore where modern
                marvels meet cultural treasures. This 4 days tour is the perfect
                balance of exploration and leisure, curated for travelers who
                want it all.
              </p>
            </div>
            <div className="flex items-center gap-10 mt-8">
              <h5 className="font-bold">Duration</h5>
              <button className="bg-black text-white px-10 py-2 font-semibold">
                3 Night and 4 Days
              </button>
            </div>
            <div className="mt-48 max-w-[550px]">
              <div className="flex gap-2 justify-between">
                <button className="flex items-center gap-1 font-medium">
                  <Icon icon="mdi-light:heart" width="22" height="22" />
                  <span>Add to wishlist</span>
                </button>
                <button className="flex items-center gap-1 font-medium">
                  <Icon icon="picon:loop" width="20" height="20" />
                  <span>Add to wishlist</span>
                </button>
                <button className="flex items-center gap-1 font-medium">
                  <Icon icon="mynaui:share" width="20" height="20" />
                  <span>Add to wishlist</span>
                </button>
              </div>
              <div className="flex gap-2 mt-10">
                <div className="border border-black bg-white py-2 px-2 flex items-center gap-8 font-medium text-lg w-fit">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
                <button className="block w-full px-8 py-4 font-medium bg-green text-white cursor-pointer hover:bg-black hoverEffect">
                  Add to cart
                </button>
              </div>
              <button className="block w-full px-8 py-4 font-medium bg-green text-white mt-4 cursor-pointer hover:bg-black hoverEffect">
                Buy it now
              </button>
              <hr className="border-1 border-gray-200 mt-8" />
              <ul className="space-y-5 mt-4">
                <li className="flex gap-2 items-center">
                  <Icon
                    icon="material-symbols:delivery-truck-speed-outline"
                    width="25"
                    height="25"
                    className="text-gray-500"
                  />
                  <span>
                    <strong className="text-gray-600">
                      Estimated Travel Window:
                    </strong>
                    {"  "}
                    Jan23 - Jan26
                  </span>
                </li>
                <li className="flex gap-2 items-center">
                  <BookingCardIcon />
                  <span>
                    <strong className="text-gray-600">
                      Estimated Travel Window:
                    </strong>
                    {"  "}
                    Jan23 - Jan26
                  </span>
                </li>
              </ul>
              <PaymentIcon className="mt-8" />
              <p className="font-medium text-lg mt-8">About your query!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
