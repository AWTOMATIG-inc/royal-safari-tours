import malaysia2 from "../../assets/tour-package/15452.jpeg";
import singapore from "../../assets/tour-package/15453.jpeg";
import malaysia from "../../assets/tour-package/15454.jpeg";
import CommonHeading from "../../components/CommonHeading";
import TourCard from "../../components/TourCard";
const tour_packages = [
  {
    id: 1,
    image: singapore,
    title: "Hiking",
    price: 166.0,
    rating: 5,
  },
  {
    id: 2,
    image: malaysia,
    title: "Wild Safari",
    price: 200.0,
    rating: 5,
    priceOff: 220.0,
  },
  {
    id: 3,
    image: malaysia2,
    title: "Mountain Climbing",
    price: 200.0,
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
