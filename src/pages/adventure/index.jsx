import { Link } from "react-router-dom";
import HeroSection from "../../components/HeroSection";
import AdvanturePackages from "./AdvanturePackages";
export default function Adventure() {
  return (
    <div>
      <HeroSection banner="/images/adventure/hp4.jpg">
        <div>
          <h5 className="text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold font-palanquin uppercase">
            Collections
          </h5>
          <div className="text-white space-x-4 mt-4 w-fit mx-auto">
            <Link to="/" className="hover:text-orange">
              Home
            </Link>
            <Link to="/products" className="hover:text-orange">
              Products
            </Link>
          </div>
        </div>
      </HeroSection>
      <AdvanturePackages />
    </div>
  );
}
