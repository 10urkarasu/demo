import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./Slider2.css"



// import required modules
import { Parallax, Navigation, Scrollbar} from "swiper";

function Slider2() {
  const [swiper, setSwiper] = useState(undefined);


  window.addEventListener('scroll',swiper)
    return (
        <>
        
        <Swiper 
        slideTo={true}
        onSwiper={slideTo}
        scrollbar={{
            hide: true,
          }}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={100}
        parallax={true}
      
        modules={[Parallax, Navigation,Scrollbar]}
        className="MySwiper2"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
        
        <SwiperSlide aria-controls="">
          
        </SwiperSlide>
        <SwiperSlide>
          
        </SwiperSlide>
        <SwiperSlide>
          
        </SwiperSlide>
        
      </Swiper>
        </>
    );
}

export default Slider2;