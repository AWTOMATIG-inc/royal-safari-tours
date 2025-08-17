import bethTakingSl from "../../assets/tour-package/15497.jpeg";
import advantureSl from "../../assets/tour-package/15498.jpeg";
import magicalSl from "../../assets/tour-package/15499.jpeg";
import CommonHeading from "../../components/CommonHeading";
import ShapeButton from "../../components/ShapeButton";
import TourCard from "../../components/TourCard";
const tour_packages = [
  {
    id: 1,
    image: magicalSl,
    title: "Hiking",
    price: 166.0,
    rating: 5,
  },
  {
    id: 2,
    image: advantureSl,
    title: "Wild Safari",
    price: 200.0,
    rating: 5,
    priceOff: 220.0,
  },
  {
    id: 3,
    image: bethTakingSl,
    title: "Mountain Climbing",
    price: 200.0,
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
