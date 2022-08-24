import React, { useRef, useEffect } from 'react'

import OOTImage from '../assets/Rectangle_9.png'


const Platform = () => {
    const titleRef = useRef(null)
    const contentRef = useRef(null)

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
                    contentRef.current.classList.add('appear')
                    appearOnScroll.unobserve(entry.target);
                }
            });
        },
            appearOptions);

        appearOnScroll.observe(titleRef.current);
        // appearOnScroll.observe(contentRef.current);
    }, [])
    return (
        <div className="bg-cover bg-no-repeat bg-center h-screen relative"
            style={{ backgroundImage: `url(${OOTImage})` }}
        >
            <div className="absolute px-6 md:px-0 top-4 text-center md:text-left md:top-[55%] md:pl-[66px] md:pr-[260px]">
                <h3 ref={titleRef}
                    className='text-2sm md:text-base font-semibold text-white mb-5 md:mb-6 uppercase invisible translate-x-20 lg:translate-x-40 opacity-0 pointer-events-none'
                >OTT Platform</h3>
                <p ref={contentRef}
                    className='text-sm md:text-base font-light text-white text-justify invisible -translate-x-20 lg:-translate-x-40 opacity-0 pointer-events-none'>
                    Sivoo’s OTT platform is a market-ready, white-labelable (hardware/software) OTT
                    dongle aiming to reach cord Nevers, cord cutters, and multi-room subscribers. Our
                    platform changes the game for operators by expanding customer reach with minimal
                    acquisition costs. Take back control of the OTT device and offer the TV experience
                    you envisioned by easily and quickly connecting and growing your subscriber base on
                    your terms, while providing the apps and content consumers know and watch.

                </p>
            </div>
        </div>
    )
}

export default Platform