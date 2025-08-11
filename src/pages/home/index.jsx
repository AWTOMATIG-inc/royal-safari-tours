import Header from "../../components/Header";
import Facilities from "./Facilities";
import Hero from "./Hero";
import SharedStories from "./SharedStories";
import TravelPartner from "./TravelPartner";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TravelPartner />
      <SharedStories />
      <Facilities />
    </>
  );
}
