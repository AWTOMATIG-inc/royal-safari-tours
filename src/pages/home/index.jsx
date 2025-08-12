import Header from "../../components/Header";
import Facilities from "./Facilities";
import Hero from "./Hero";
import Memories from "./Memories";
import NatureAndBeyond from "./NatureAndBeyond";
import SharedStories from "./SharedStories";
import Subscription from "./Subscription";
import Testimonials from "./Testimonials";
import TourPackage from "./TourPackage";
import TravelCategory from "./TravelCategory";
import TravelPartner from "./TravelPartner";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TravelPartner />
      <SharedStories />
      <Facilities />
      <TourPackage />
      <Memories />
      <TravelCategory />
      <NatureAndBeyond />
      <Testimonials />
      <Subscription />
    </>
  );
}
