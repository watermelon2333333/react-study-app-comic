import React, { useEffect, useState } from "react";
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
import { Banner } from "./style";
function Slider(props) {
    const [sliderSwiper, setSliderSwiper] = useState(null);
    const { bannerList } = props;

    useEffect(() => {
        if (bannerList.length && !sliderSwiper) {
            let newSliderSwiper = new Swiper('.slider-container', {
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                pagination: { el: '.swiper-pagination' },

            });
            setSliderSwiper(newSliderSwiper);
        }
    }, [bannerList.length, sliderSwiper])


    return (
        <Banner>
            <div className="slider-container">
                <div className="swiper-wrapper">
                    {
                        bannerList.map(slider => {
                            return (
                                <div className="swiper-slide" key={slider.cover}>
                                    <div className="slider-nav">
                                        <img src={slider.cover} width='30%' height='100%' alt='推荐' />
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="swiper-pagination"> </div>
            </div>
        </Banner>
    )
}
export default Slider;