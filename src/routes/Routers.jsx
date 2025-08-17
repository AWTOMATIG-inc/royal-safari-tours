import { Route, Routes } from "react-router-dom";
import AboutUs from "../pages/about-us";
import Adventure from "../pages/adventure";
import Contact from "../pages/contact";
import Home from "../pages/home";
import PackageDetails from "../pages/package-details";
import Tours from "../pages/tours";

export default function Routers() {
  return (
    <main className="bg-light">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adventure" element={<Adventure />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/packages/:id" element={<PackageDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </main>
  );
}
