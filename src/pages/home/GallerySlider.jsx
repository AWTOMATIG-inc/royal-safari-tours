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
    <div className="container py-10">
      <div className="relative ">
        <Swiper
          modules={[FreeMode, Navigation, Pagination, Autoplay]}
          slidesPerView={5}
          loop={true}
          spaceBetween={10}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={false}
          freeMode={true}
          speed={1000}
        >
          {slideItems.map((item) => (
            <SwiperSlide key={item}>
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
