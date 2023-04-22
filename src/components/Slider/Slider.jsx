import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import { EffectCoverflow } from "swiper";
import { Autoplay } from "swiper";
import "./Slider.css";
import 'swiper/swiper-bundle.css';



function Slider() {
    return (
        <>
            <div className="container"> 

            <video autoPlay muted loop className="background-video" >
             <source type="video/mp4" src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/rwFaxDIw0b_HD.mp4"/>
             <source type="video/ogg" src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/rwFaxDIw0b_HD.ogg"/>
            </video>

            </div>
        </>
    );
}

export default Slider;