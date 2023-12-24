import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import auto1 from "@/assets/auto1.jpg";
import auto2 from "@/assets/auto2.jpg";
import auto3 from "@/assets/auto3.jpg";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectFlip, Pagination, Navigation } from "swiper/modules";

export const Carousel = () => {
  return (
    <Swiper
      effect={"flip"}
      grabCursor={true}
      pagination={true}
      navigation={true}
      modules={[EffectFlip, Pagination, Navigation]}
	  autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      className="mySwiper w-full md:w-1/2 h-[600px]"
    >
      <SwiperSlide>
        <Image src={auto1} fill={true} alt="auto-img" className="rounded-lg "/>
		ciao
      </SwiperSlide>
      <SwiperSlide>
        <Image src={auto2} fill={true} alt="auto-img" className="rounded-lg " />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={auto3} fill={true} alt="auto-img" className="rounded-lg " />
      </SwiperSlide>
    </Swiper>
  );
};
