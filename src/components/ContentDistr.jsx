import React, { useEffect, useRef } from 'react'

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
    const rightRef = useRef(null)
    const leftRef = useRef(null)

    useEffect(() => {


        const appearOptions = {
            threshold: 0,
            rootMargin: "0px 0px -250px 0px"
        };

        const appearOnScroll = new IntersectionObserver(function (
            entries,
            appearOnScroll
        ) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add("appear");
                    appearOnScroll.unobserve(entry.target);
                }
            });
        },
            appearOptions);

        appearOnScroll.observe(rightRef.current);
        appearOnScroll.observe(leftRef.current);
        // appearOnScroll.observe(contentRef.current);
    }, [])
    return (
        <div className='bg-inherit relative flex flex-col lg:justify-between lg:flex-row items-center h-auto '>
            <div ref={rightRef}
                className="hidden md:w-[80%] lg:w-[40%]  md:flex  invisible -translate-x-40 opacity-0 pointer-events-none">
                <img
                    src={image1} alt=""
                />
                <img
                    src={image2} alt=""
                    className='transform -translate-x-14'
                />
                <img
                    src={image3} alt=""
                    className='transform -translate-x-28 '
                />
                {/* <img
                    src={image6} alt=""
                    className='transform w-auto -translate-x-28 block lg:hidden'
                /> */}
            </div>
            <div className="flex  md:w-[40%]  md:hidden ">
                <img
                    src={image4} alt=""
                />
                <img
                    src={image5} alt=""
                    className='transform '
                />
                <img
                    src={image6} alt=""
                    className='transform'
                />
            </div>
            <div ref={leftRef}
                className="w-full md:w-[100%] md:px-6 lg:w-[50%]  lg:pr-20 px-6  invisible -translate-x-40 opacity-0 pointer-events-none">
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
                        className='w-auto h-[35px] md:h-[50px] mb-2   mr-8 md:mr-4'
                    />
                    <img
                        src={android} alt=""
                        className='w-auto h-[35px] md:h-[50px] mb-2 mr-8 md:mr-4'
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