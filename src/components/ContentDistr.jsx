import React from 'react'

import image1 from '../assets/Rectangle_11.png'
import image2 from '../assets/Rectangle_12.png'
import image3 from '../assets/Rectangle_13.png'
import image4 from '../assets/mobile_1.png'
import image5 from '../assets/mobile_2.png'
import image6 from '../assets/mobile_3.png'

import frame from '../assets/Frame.png'
import kaiOs from '../assets/KaiOS_logo.png'
import ios from '../assets/Group_5.png'
import android from '../assets/Group_2.png'

const ContentDistr = () => {
    return (
        <div className='bg-inherit relative flex flex-col lg:justify-between lg:flex-row items-center h-auto '>
            <div className="hidden md:w-[40%]  lg:flex">
                <img
                    src={image1} alt=""
                />
                <img
                    src={image2} alt=""
                    className='transform -translate-x-14'
                />
                <img
                    src={image3} alt=""
                    className='transform -translate-x-28'
                />
            </div>
            <div className="lg:hidden w-full flex items-center justify-start relative">
                <img
                    src={image4} alt=""
                    className='w-[35%] h-[430px] md:h-auto md:max-h-screen'
                />
                <img
                    src={image5} alt=""
                    className='w-[35%] h-[430px]  md:h-auto  md:max-h-screen'
                />
                <img
                    src={image6} alt=""
                    className='w-[35%] h-[430px]  md:h-auto  md:max-h-screen'
                />
            </div>
            <div className="w-full md:w-[60%] md:px-6 lg:w-[50%]  lg:pr-20 px-6">
                <h3 className='font-semibold text-base text-current uppercase mt-6 lg:mt-0'>Content Distribution</h3>
                <img src={frame} alt="" className='md:my-6 mt-2 mb-8' />
                <p className='text-base text-current font-light'>
                    Specializing in short form content mobile distribution, and more suitable OTT formats,
                    our content genres are diverse and include local to international programming available
                    as ad-supported, subscription and VOD.
                </p>
                <div className="flex mt-5 md:mt-[100px] items-center justify-center flex-wrap">
                    <img
                        src={ios} alt=""
                        className='w-auto h-[35px] md:h-[50px]   mr-8 md:mr-4'
                    />
                    <img
                        src={android} alt=""
                        className='w-auto h-[35px] md:h-[50px] mr-8 md:mr-4'
                    />
                    <img
                        src={kaiOs} alt=""
                        className='w-auto h-[35px] md:h-[50px] lg:h-[60px]'
                    />
                </div>
            </div>
        </div>
    )
}

export default ContentDistr