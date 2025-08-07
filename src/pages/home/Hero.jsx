import { Icon } from "@iconify/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import hp1 from "../../assets/home/hp1.jpg";
import hp2 from "../../assets/home/hp2.jpg";
import hp3 from "../../assets/home/hp3.jpeg";
const images = [hp1, hp2, hp3];
export default function Hero() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade, Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={false}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          effect="fade"
          speed={1000}
          className="mySwiper2 h-[90vh]"
        >
          {images.map((img) => (
            <SwiperSlide key={img}>
              <img
                className="w-full h-full  object-cover"
                src={img}
                alt="banner"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="bg-light absolute -bottom-32 right-1/2 translate-x-1/2 md:translate-x-0 md:right-0  z-10 py-4 px-12 rounded-l-4xl grid grid-cols-[4fr_100px] items-center justify-center gap-8 ">
          <div className="w-fit mx-auto">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={3}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[Thumbs]}
              className="mt-4 w-[250px] md:w-[900px]"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index} className="cursor-pointer">
                  <img
                    src={img}
                    alt={`thumb-${index}`}
                    className="w-[98px] h-[134px] md:w-[260px] md:h-[230px] object-cover border rounded-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex gap-x-4 justify-between absolute md:static w-full px-8">
            <button className="custom-prev cursor-pointer border rounded-full hover:bg-green-500 hoverEffect">
              <Icon icon="solar:arrow-left-linear" width="25" height="25" />
            </button>
            <button className="custom-next cursor-pointer border rounded-full hover:bg-green-500 hoverEffect">
              <Icon icon="solar:arrow-right-linear" width="25" height="25" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
