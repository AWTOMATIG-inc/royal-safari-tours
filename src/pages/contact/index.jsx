import HeroSection from "../../components/HeroSection";
import ContactForm from "./ContactForm";
import OurClient from "./OurClient";
export default function Contact() {
  return (
    <>
      <HeroSection banner="/images/banners/contact.jpg">
        <h5 className="text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold font-palanquin">
          Contact section
        </h5>
      </HeroSection>
      <ContactForm />
      <OurClient />
    </>
  );
}
