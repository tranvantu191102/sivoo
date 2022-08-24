import React, { useRef, useEffect } from 'react'

import mapImage from '../assets/map.png'
import frame from '../assets/Frame.png'


const Map = () => {
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
        <div className=' p-6 md:pt-[78px] md:pl-[105px] md:pr-[50px] md:pb-[64px]'>
            <h3 className='font-semibold text-base text-current uppercase'>Sivoo Cloud Delivery Network</h3>
            <img src={frame} alt="" className='mt-[23px] mb-[28px]' />
            <div className="flex flex-col-reverse md:flex-row items-center ">
                <div ref={leftRef}
                    className="w-[100%] md:w-[30%] px-6 md:px-0 invisible -translate-y-40 opacity-0 pointer-events-none">
                    <p className='font-light text-sm md:text-base text-current mb-6 pr-3 mt-9 md:mt-0'>
                        SivooCloud Servers strategically located across the globe comprise our
                        CDN solution and serve a dozen countries across 5 continents.

                    </p>
                    <h3 className='font-medium text-base text-current mb-3 uppercase'>Americas</h3>
                    <div className="flex items-center justify-start">
                        <div className="text-2sm mr-3">SEATTLE</div>
                        <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.684326 6.71458H19.5635M19.5635 6.71458L13.4911 0.642151M19.5635 6.71458L13.4911 12.787" stroke="white" stroke-width="1.5" />
                        </svg>

                    </div>
                    <div className="flex items-center justify-start">
                        <div className="text-2sm mr-3">LOS ANGELES</div>
                        <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.684326 6.71458H19.5635M19.5635 6.71458L13.4911 0.642151M19.5635 6.71458L13.4911 12.787" stroke="white" stroke-width="1.5" />
                        </svg>

                    </div>
                    <div className="flex items-center justify-start">
                        <div className="text-2sm mr-3">CHICAGO</div>
                        <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.684326 6.71458H19.5635M19.5635 6.71458L13.4911 0.642151M19.5635 6.71458L13.4911 12.787" stroke="white" stroke-width="1.5" />
                        </svg>

                    </div>
                    <div className="flex items-center justify-start">
                        <div className="text-2sm mr-3">PHILADELPHIA</div>
                        <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.684326 6.71458H19.5635M19.5635 6.71458L13.4911 0.642151M19.5635 6.71458L13.4911 12.787" stroke="white" stroke-width="1.5" />
                        </svg>

                    </div>
                    <div className="flex items-center justify-start">
                        <div className="text-2sm mr-3">MIAMI</div>
                        <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.684326 6.71458H19.5635M19.5635 6.71458L13.4911 0.642151M19.5635 6.71458L13.4911 12.787" stroke="white" stroke-width="1.5" />
                        </svg>

                    </div>
                    <div className="flex items-center justify-start">
                        <div className="text-2sm mr-3">RIO DE JANEIRO</div>
                        <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.684326 6.71458H19.5635M19.5635 6.71458L13.4911 0.642151M19.5635 6.71458L13.4911 12.787" stroke="white" stroke-width="1.5" />
                        </svg>

                    </div>
                </div>
                <div ref={rightRef}
                    className="w-[100%] md:w-[70%] invisible translate-y-40 opacity-0 pointer-events-none">
                    <img src={mapImage} alt="" className='w-full' />
                </div>
            </div>
        </div>
    )
}

export default Map