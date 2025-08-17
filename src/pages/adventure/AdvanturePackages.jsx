import { useState } from "react";
import TourCard from "../../components/TourCard";
const collections = [
  {
    id: 1,
    title: "Canoe Boating",
    price: "110.00",
    rating: 5,
    image: "/images/adventure/collections/Boating.jpg",
  },
  {
    id: 2,
    title: "Camping",
    price: "210.00",
    rating: 5,
    image: "/images/adventure/collections/camping.jpg",
  },

  {
    id: 3,
    title: "Bamboo Rafting",
    price: "158.00",
    rating: 5,
    image: "/images/adventure/collections/BambooRafting.jpg",
  },
  {
    id: 4,
    title: "Canyon Rope Swing",
    price: "180.00",
    rating: 5,
    image: "/images/adventure/collections/swing.jpg",
  },
  {
    id: 5,
    title: "Freestyle Canyoning",
    price: "180.00",
    rating: 5,
    image: "/images/adventure/collections/canyoning.jpg",
  },
  {
    id: 6,
    title: "Hiking",
    price: "165.00",
    rating: 5,
    image: "/images/adventure/collections/hiking.jpg",
  },
  {
    id: 7,
    title: "Hills Climbing",
    price: "105.00",
    rating: 5,
    image: "/images/adventure/collections/climbing.jpg",
  },
  {
    id: 8,
    title: "Horse Riding",
    price: "180.00",
    rating: 5,
    image: "/images/adventure/collections/horse.jpg",
  },
  {
    id: 9,
    title: "Horseback Riding",
    price: "205.00",
    rating: 5,
    image: "/images/adventure/collections/riding.jpg",
  },
  {
    id: 10,
    title: "Kayaking",
    price: "140.00",
    rating: 5,
    image: "/images/adventure/collections/kayaking.jpg",
  },
  {
    id: 11,
    title: "Mountain Climbing",
    price: "180.00",
    rating: 5,
    image: "/images/adventure/collections/climbing.jpg",
  },
  {
    id: 12,
    title: "Mountain Cycling",
    price: "180.00",
    rating: 5,
    image: "/images/adventure/collections/cycling.jpg",
  },
];
export default function AdvanturePackages() {
  const [filterValue, setFilterValue] = useState("");
  return (
    <section className="container">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center pt-20 pb-14">
          <select
            name=""
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            className="bg-green text-white py-2 px-2 rounded-sm focus:outline-none"
          >
            <option className="bg-white text-green  opacity-0" value="">
              Sort By Contries
            </option>
            <option className="bg-white text-green" value="Bangladesh">
              Bangladesh
            </option>
            <option className="bg-white text-green" value="China">
              China
            </option>
            <option className="bg-white text-green" value="Nepal">
              Nepal
            </option>
            <option className="bg-white text-green" value="Srilanka">
              Srilanka
            </option>
            <option className="bg-white text-green" value="Maldrives">
              Maldrives
            </option>
          </select>
          <h1 className="text-5xl font-bold font-palanquin ">
            {filterValue ? filterValue : "Bangladesh"}
          </h1>
          <ul className="h-fit flex gap-2">
            <li className="bg-green px-4 py-1 h-fit text-white cursor-pointer rounded-sm text-sm">
              1
            </li>
            <li className="bg-green px-4 py-1 h-fit text-white cursor-pointer rounded-sm text-sm">
              2
            </li>
            <li className="bg-green px-4 py-1 h-fit text-white cursor-pointer rounded-sm text-sm">
              3
            </li>
            <li className="bg-green px-4 py-1 h-fit text-white cursor-pointer rounded-sm text-sm">
              4
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 xxs:gap-4 lg:gap-10">
          {collections.map((tour_package) => (
            <TourCard
              type="green"
              key={tour_package.id}
              tour_package={tour_package}
            />
          ))}
        </div>
        <div className="text-center sm:w-fit mx-auto text-sm sm:text-base lg:text-lg py-20">
          <p>You're viewing 12 of 26 products</p>
          <div className="w-[85%] mx-auto md:w-[320px] h-3 bg-green rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
