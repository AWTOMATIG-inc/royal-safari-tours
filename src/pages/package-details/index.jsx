import { Link, useLocation } from "react-router-dom";
import HeroSection from "../../components/HeroSection";
import DetailSection from "./DetailSection";
export default function PackageDetails() {
  const location = useLocation();
  const packages = location?.state?.tour_package;
  console.log(packages);
  return (
    <>
      <HeroSection banner="/images/banners/contact.jpg">
        <div>
          <h5 className="text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold font-palanquin">
            Our Offers
          </h5>
          <div className="text-white space-x-4 mt-4 w-fit mx-auto">
            <Link to="/" className="hover:text-orange">
              All
            </Link>
            <Link to="/about-us" className="hover:text-orange">
              Bamboo Rafting
            </Link>
          </div>
        </div>
      </HeroSection>
      <DetailSection packages={packages} />
    </>
  );
}
