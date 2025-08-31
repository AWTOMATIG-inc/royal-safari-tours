import { Link } from "react-router-dom";
import HeroSection from "../../components/HeroSection";
import AboutSection from "./AboutSection";
import CustomerReviews from "./CustomerReviews";
import OurFacilities from "./OurFacilities";
import Sponsors from "./Sponsors";
import TeamSection from "./TeamSection";
export default function AboutUs() {
  return (
    <div>
      <HeroSection banner="/images/banners/camping.jpg">
        <div>
          <h5 className="text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold font-palanquin">
            About Us
          </h5>
          <div className="text-white space-x-4 mt-4 w-fit mx-auto">
            <Link to="/" className="hover:text-orange">
              Home
            </Link>
            <Link to="/about-us" className="hover:text-orange">
              About Us
            </Link>
          </div>
        </div>
      </HeroSection>
      <AboutSection />
      <TeamSection />
      <OurFacilities />
      <CustomerReviews />
      <Sponsors />
    </div>
  );
}
