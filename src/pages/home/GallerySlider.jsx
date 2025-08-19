import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const slideItems = [
  "Frompeakstopaths1.jpg",
  "Frompeakstopaths3.jpg",
  "Frompeakstopaths4.jpg",
  "Frompeakstopaths5.jpg",
  "Frompeakstopaths6.jpg",
  "Frompeakstopaths7.jpg",
  "Frompeakstopaths8.jpg",
  "Frompeakstopaths9.jpg",
  "Frompeakstopaths11.jpg",
  "Frompeakstopaths12.jpg",
  "Frompeakstopaths13.jpg",
  "Frompeakstopaths14.jpg",
  "Frompeakstopaths15.jpg",
  "Frompeakstopaths16.jpg",
  "Frompeakstopaths17.jpg",
  "Frompeakstopaths18.jpg",
  "Frompeakstopaths19.jpg",
  "Frompeakstopaths20.jpg",
];
export default function GallerySlider() {
  return (
    <div className=" py-8 hidden md:block">
      <div className="relative ">
        <Swiper
          modules={[FreeMode, Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          loop={true}
          spaceBetween={10}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          pagination={false}
          freeMode={true}
          speed={4000}
          breakpoints={{
            // When window width is >= 1024px
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            // When window width is >= 1280px
            1280: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            // When window width is >= 1280px
            1536: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
        >
          {slideItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div>
                <img
                  className="w-full h-[350px] object-cover"
                  src={`/images/home-gallery/${item}`}
                  alt="banner"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
