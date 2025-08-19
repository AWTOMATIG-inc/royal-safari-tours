import CommonHeading from "../../components/CommonHeading";
import ShapeButton from "../../components/ShapeButton";
import TourCard from "../../components/TourCard";
const tour_packages = [
  {
    id: 1,
    image: "/images/tour-package/15499.jpeg",
    title: "Hiking",
    price: "43,500",
    rating: 5,
  },
  {
    id: 2,
    image: "/images/tour-package/15498.jpeg",
    title: "Wild Safari",
    price: "32,900",
    rating: 5,
    priceOff: "2500",
  },
  {
    id: 3,
    image: "/images/tour-package/15497.jpeg",
    title: "Mountain Climbing",
    price: "48,900",
    rating: 5,
  },
  {
    id: 4,
    image: "/images/tour-package/15500.jpeg",
    title: "Experience",
    price: "43,900",
    rating: 5,
  },
  {
    id: 5,
    image: "/images/tour-package/15501.jpeg",
    title: "Discover",
    price: "49,900",
    rating: 5,
  },
  {
    id: 6,
    image: "/images/tour-package/15502.jpeg",
    title: "Explore",
    price: "31,900",
    rating: 5,
  },
];
export default function NatureAndBeyond() {
  return (
    <div className="bg-body">
      <div className="container max-w-[1520px] py-14">
        <CommonHeading
          title="Nature & Beyond"
          subtitle="Unforgettable Journeys"
        />
        <div className="flex flex-wrap justify-center gap-4 w-fit mx-auto my-8">
          <ShapeButton name="All" className="!text-black" />
          <ShapeButton
            name="Bangladesh"
            className="group-hover:text-black hoverEffect"
          />
          <ShapeButton
            name="Thailand"
            className="group-hover:text-black hoverEffect"
          />
          <ShapeButton
            name="Nepal"
            className="group-hover:text-black hoverEffect"
          />
          <ShapeButton
            name="Srilanka"
            className="group-hover:text-black hoverEffect"
          />
          <ShapeButton
            name="Singapore"
            className="group-hover:text-black hoverEffect"
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 xxs:gap-4 lg:gap-10 pt-20">
          {tour_packages.map((tour_package) => (
            <TourCard key={tour_package.id} tour_package={tour_package} />
          ))}
        </div>
      </div>
    </div>
  );
}
