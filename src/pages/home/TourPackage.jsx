import CommonHeading from "../../components/CommonHeading";
import TourCard from "../../components/TourCard";
const tour_packages = [
  {
    id: 1,
    image: "/images/tour-package/15453.jpeg",
    title: "Hiking",
    price: "51,900",
    rating: 5,
  },
  {
    id: 2,
    image: "/images/tour-package/15454.jpeg",
    title: "Wild Safari",
    price: "27,900",
    rating: 5,
    priceOff: "2500",
  },
  {
    id: 3,
    image: "/images/tour-package/15452.jpeg",
    title: "Mountain Climbing",
    price: "33,900",
    rating: 5,
  },
  {
    id: 4,
    image: "/images/tour-package/15445.jpeg",
    title: "Pattaya",
    price: "13,560",
    rating: 5,
  },
  {
    id: 5,
    image: "/images/tour-package/15450.jpeg",
    title: "Mountain Climbing",
    price: "15,000",
    rating: 5,
  },
  {
    id: 6,
    image: "/images/tour-package/15461.jpeg",
    title: "Mountain Climbing",
    price: "18,960",
    rating: 5,
  },
  {
    id: 7,
    image: "/images/tour-package/stone.jpg",
    title: "Hiking",
    price: "18,800",
    rating: 5,
  },
  {
    id: 8,
    image: "/images/tour-package/Wild-Safari.png",
    title: "Wild Safari",
    price: "24,000",
    rating: 5,
  },
  {
    id: 9,
    image: "/images/tour-package/waterfall.png",
    title: "Mountain Climbing",
    price: "24,000",
    rating: 5,
  },
];
export default function TourPackage() {
  return (
    <div className="bg-body">
      <div className="container py-14 max-w-[1520px]">
        <CommonHeading
          title="Unforgettable tours tailored for thrill-seekers."
          subtitle="Royal Picks"
        />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 xxs:gap-4 lg:gap-10 pt-20">
          {tour_packages.map((tour_package) => (
            <TourCard key={tour_package.id} tour_package={tour_package} />
          ))}
        </div>
      </div>
    </div>
  );
}
