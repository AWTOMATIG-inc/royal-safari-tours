import { Route, Routes } from "react-router-dom";
import Adventure from "../pages/adventure";
import Contact from "../pages/contact";
import Home from "../pages/home";
import Tours from "../pages/tours";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adventure" element={<Adventure />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
