import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import royal_logo from "../assets/logo/royal-logo.png";
import royal_logo2 from "../assets/logo/royal-safari-2.png";
const links = [
  {
    id: 1,
    pathname: "HOME",
    path: "/",
  },
  {
    id: 2,
    pathname: "ADVENTURE",
    path: "/adventure",
  },
  {
    id: 3,
    pathname: "TOURS",
    path: "/tours",
  },
  {
    id: 4,
    pathname: "ABOUT US",
    path: "/about-us",
  },
  {
    id: 5,
    pathname: "CONTACT",
    path: "/contact",
  },
];
export default function Header() {
  const [isShowNav, setIsShowNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className="fixed w-full top-0 z-99 font-inter">
        <div
          className={`relative ${
            scrolled ? "bg-white lg:bg-white" : "bg-transparent"
          }`}
        >
          <nav className="container mx-auto py-2 ">
            <div className="flex flex-row-reverse lg:flex-row justify-between h-32  items-center text-[#161616]">
              <div className="absolute left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:static">
                <Link to="/" className="">
                  <img
                    src={royal_logo}
                    alt="Logo"
                    className="w-30 xxs:w-36 sm:w-40 h-auto object-cover"
                  />
                </Link>
              </div>
              <ul className="hidden xl:absolute left-1/2 xl:-translate-x-1/2 lg:flex space-x-18 text-xl">
                {links.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.path}
                      className={`hover:text-orange-400 transition-colors duration-300 ${
                        pathname == link.path && "text-orange-400"
                      }`}
                    >
                      {link.pathname}
                    </Link>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setIsShowNav((prev) => !prev)}
                className={`cursor-pointer lg:hidden z-[100]  mr-6 ${
                  scrolled
                    ? isShowNav
                      ? "text-white"
                      : "text-black"
                    : "text-white"
                }`}
              >
                <Icon
                  icon="akar-icons:three-line-horizontal"
                  width="32"
                  height="32"
                />
              </button>
              {/* for mobile */}
              <div
                className={`lg:hidden absolute z-99 top-0 right-0  transition-all duration-300 header-gradient  origin-top ${
                  isShowNav
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                }`}
              >
                <div className="mt-28 mb-8">
                  <img
                    src={royal_logo2}
                    alt="Logo"
                    className="w-18 mx-auto  h-auto object-cover"
                  />
                  <hr className="border-white my-4" />
                  <ul className=" text-center  space-y-8 px-5 !text-sm">
                    {links.map((link) => (
                      <li key={link.id}>
                        <Link
                          to={link.path}
                          className={`hover:text-white transition-colors duration-300 ${
                            pathname == link.path && "text-white"
                          }`}
                        >
                          {link.pathname}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
