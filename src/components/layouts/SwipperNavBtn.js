import React from "react"
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md"
import { useSwiper } from "swiper/react"

export const SwipperNavBtn = () => {
    const swiper = useSwiper();
    return (
        <div className="swiper-nav">
            <MdOutlineArrowForwardIos className="swiper-button-next " onClick={() => swiper.slideNext()}>Next</MdOutlineArrowForwardIos>
            <MdOutlineArrowBackIos className="swiper-button-prev  " onClick={() => swiper.slidePrev()}>Prev</MdOutlineArrowBackIos>
        </div>

    );
};