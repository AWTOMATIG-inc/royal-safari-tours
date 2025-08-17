import Marquee from "react-fast-marquee";
const clientLogos = [
  {
    id: 1,
    logo: "/images/business-partner/1.png",
    name: "dolan",
  },
  {
    id: 2,
    logo: "/images/business-partner/2.png",
    name: "go travel",
  },
  { id: 3, logo: "/images/business-partner/3.png", name: "travel" },
  { id: 4, logo: "/images/business-partner/4.png", name: "fly" },
  { id: 5, logo: "/images/business-partner/5.png", name: "eramkok" },
  {
    id: 6,
    logo: "/images/business-partner/6.png",
    name: "travel",
  },
];
export default function OurClient() {
  return (
    <div className="bg-light">
      <Marquee
        speed={50}
        gradient={false}
        autoFill={true}
        className="container "
      >
        <ul className=" flex gap-x-4 md:gap-x-14 items-center  !px-10  py-8">
          {clientLogos.map((logos) => (
            <li key={logos.id}>
              <img
                src={logos.logo}
                width={302}
                height={150}
                className={`h-full  object-cover  rounded-md px-4 py-2`}
                alt={logos.name}
              />
            </li>
          ))}
        </ul>
      </Marquee>
    </div>
  );
}
