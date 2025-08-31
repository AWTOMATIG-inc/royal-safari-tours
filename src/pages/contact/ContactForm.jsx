import InputBox from "../../components/InputBox";
import ShapeButton from "../../components/ShapeButton";
export default function ContactForm() {
  return (
    <div className="py-12 lg:py-20 bg-light">
      <div className="container md:!px-28 lg:!px-8 grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14605.82905741786!2d90.4140418!3d23.766726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c781bbc20d1d%3A0xc9427ec3e21bc8f6!2sDhaka%201219!5e0!3m2!1sen!2sbd!4v1755357399034!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md min-h-[300px] md:min-h-[350px]"
          ></iframe>
        </div>
        <div>
          <div>
            <h5 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-orange font-inter">
              Contact Section
            </h5>
            <p className="mt-3 lg:mt-4 mb-8 lg:mb-10 font-medium sm:text-lg font-roboto text-darkSlate">
              Have a question or comment? To contact us, please complete the
              form below.
            </p>
          </div>
          <form className="flex flex-col gap-5">
            <InputBox label="Full Name" />
            <InputBox label="Email address" />
            <InputBox label="Mobile Number" />
            <InputBox label="Upload File (optional)" type="file" />
            <InputBox label="Message" className="min-h-20" />

            <ShapeButton
              name="SEND MAIL"
              className="text-orange group-hover:text-black hoverEffect"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
