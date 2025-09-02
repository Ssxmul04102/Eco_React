import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

export default function ImageSlider() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 4000 }}
      className="w-full h-screen"  // 
    >
      <SwiperSlide>
        <img src="/img1.jpg" alt="EcoEnergix 1" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img2.jpg" alt="EcoEnergix 2" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img3.jpg" alt="EcoEnergix 3" className="w-full h-full object-cover" />
      </SwiperSlide>
    </Swiper>
  )
}
