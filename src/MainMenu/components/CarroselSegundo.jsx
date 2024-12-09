// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
import Imigro1 from "../assets/imigrante1.png"
import Imigro2 from "../assets/imigrante2.png"
import Imigro3 from "../assets/imigrante3.png"


export default function CarroselSegundo() {
  return (
    <div>
      <Swiper
        className='carroso'
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        
        <SwiperSlide ><img className='carroso_slide' src={Imigro3} alt="Foto de imigro" /></SwiperSlide>
        <SwiperSlide ><img className='carroso_slide' src={Imigro1} alt="Foto de imigro" /></SwiperSlide>
        <SwiperSlide ><img className='carroso_slide' src={Imigro2} alt="Foto de imigro" /></SwiperSlide>

      </Swiper>
    </div>
  )
}
