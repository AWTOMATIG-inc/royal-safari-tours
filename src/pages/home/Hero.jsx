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
          className="mySwiper2 h-[55vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh]"
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
        <div className="bg-light absolute -bottom-32 right-1/2 translate-x-1/2 sm:translate-x-0 sm:right-0  z-10 rounded-t-4xl sm:rounded-t-none sm:rounded-l-4xl w-[98%] xxs:w-[92%] sm:w-fit">
          <div className="grid sm:grid-cols-[4fr_100px] items-center justify-center gap-8 relative !w-full px-12 py-4">
            <div className="w-fit mx-auto">
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[Thumbs]}
                className="mt-4 w-[200px] xxs:w-[250px] sm:w-[400px] md:w-[500px] lg:w-[700px] "
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index} className="cursor-pointer">
                    <img
                      src={img}
                      alt={`thumb-${index}`}
                      className="w-[98px] h-[90px] xxs:h-[120px] sm:h-[160px] sm:w-[250px] md:w-[180px] md:h-[200px] lg:w-[200px] lg:h-[230px]  object-cover border rounded-full"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="flex gap-x-4 justify-between absolute left-0 sm:static !w-full sm:px-8 z-10 px-1.5 xxs:px-3">
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
    </div>
  );
}
