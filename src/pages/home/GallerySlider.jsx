import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import bangladesh from "../../assets/testimonials/bangladesh.png";
import srilanka from "../../assets/testimonials/srilanka.png";
import thailand from "../../assets/testimonials/thailand.png";
const slideItems = [
  srilanka,
  bangladesh,
  thailand,
  srilanka,
  bangladesh,
  thailand,
  srilanka,
  bangladesh,
  thailand,
  srilanka,
  bangladesh,
  thailand,
  srilanka,
  bangladesh,
  thailand,
  srilanka,
  bangladesh,
  thailand,
];
export default function GallerySlider() {
  return (
    <div className="container py-10 hidden md:block">
      <div className="relative ">
        <Swiper
          modules={[FreeMode, Navigation, Pagination, Autoplay]}
          slidesPerView={5}
          loop={true}
          spaceBetween={10}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          pagination={false}
          freeMode={true}
          speed={4000}
        >
          {slideItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div>
                <img
                  className="w-full h-full object-cover"
                  src={item}
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
