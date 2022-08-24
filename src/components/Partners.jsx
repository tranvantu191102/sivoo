import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";


import image1 from '../assets/KaiOS_logo.png'
import image2 from '../assets/Mask_group_1.png'
import image3 from '../assets/Mask_group.png'
import image4 from '../assets/Mask_group_2.png'
import image5 from '../assets/Mask_group_3.png'
import frame from '../assets/Frame.png'

const Partners = () => {
    return (
        <div className='md:py-20 lg:px-[105px]  mt-[50px] lg:mt-0'>
            <h3 className='text-base font-semibold text-current px-6'>OUR PARTNERS</h3>
            <img src={frame} alt="" className='mt-6 lg:mb-24 mb-5 px-6 ' />
            <div className="hidden lg:flex items-center justify-center overflow-x-auto pb-8 lg:pb-0">
                <img
                    src={image1}
                    alt=""
                    className='h-[50px] md:h-auto mb-2 mr-6'
                />
                <img
                    src={image2}
                    alt=""
                    className='h-[50px] md:h-auto mb-2 mr-6'
                />
                <img
                    src={image3}
                    alt=""
                    className='h-[50px] md:h-auto mb-2 mr-6'
                />
                <img
                    src={image4}
                    alt=""
                    className='h-[50px] md:h-auto mb-2 mr-6'
                />
                <img
                    src={image5}
                    alt=""
                    className='h-[50px] md:h-auto mb-2 mr-6'
                />
            </div>
            <div className="block lg:hidden py-7">
                {
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        className="mySwiper"
                    >
                        <SwiperSlide>  <img
                            src={image1}
                            alt=""
                            className='h-[50px] md:h-auto mb-2 mr-6'
                        /></SwiperSlide>
                        <SwiperSlide>  <img
                            src={image2}
                            alt=""
                            className='h-[50px] md:h-auto mb-2 mr-6'
                        /></SwiperSlide>
                        <SwiperSlide>  <img
                            src={image3}
                            alt=""
                            className='h-[50px] md:h-auto mb-2 mr-6'
                        /></SwiperSlide>
                        <SwiperSlide>  <img
                            src={image4}
                            alt=""
                            className='h-[50px] md:h-auto mb-2 mr-6'
                        /></SwiperSlide>
                        <SwiperSlide>  <img
                            src={image5}
                            alt=""
                            className='h-[50px] md:h-auto mb-2 mr-6'
                        /></SwiperSlide>
                    </Swiper>
                }
            </div>
        </div>
    )
}

export default Partners