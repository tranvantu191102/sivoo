import React, { useState } from 'react'

import arrowRight from '../assets/ArrowRight.png'
import arrowLeft from '../assets/ArrowLeft.png'

const Service = ({ data, image, name }) => {

    const [active, setActive] = useState(data[0])
    return (
        <div style={{ backgroundImage: `url(${image})` }}
            className="bg-cover bg-no-repeat bg-center h-[calc(100vh)] relative"
        >
            <h2 className='font-semibold text-base uppercase text-white text-center pt-[60px]'>{name}</h2>
            <div className="absolute top-40 md:top-32 lg:top-40 left-[60px]">
                <img src={arrowLeft} alt="" />
            </div>
            <div className="absolute top-40 md:top-32 lg:top-40  right-[60px]">
                <img src={arrowRight} alt="" />
            </div>
            <div className="block md:hidden absolute top-40 left-1/2 transform -translate-x-1/2  uppercase text-2sm font-semibold cursor-pointer">{active.title}</div>

            <div className="absolute bottom-[60px] flex flex-col items-start justify-center ">
                <div className="flex items-center w-full justify-center md:justify-start md:pl-[60px] flex-wrap">
                    {
                        data.map((item, index) => (
                            <div className={`hidden md:block mr-[50px] mb-[30px] uppercase text-2sm font-semibold relative cursor-pointer
                             ${active.title === item.title ? 'text-active menu-active' : 'text-white'}
                             `}
                                key={index}
                                onClick={() => setActive(item)}
                            >
                                {item.title}
                            </div>
                        ))
                    }

                </div>
                <div className="lg:pr-[330px] lg:pl-[60px] px-6 text-center mt-[30px] text-white text-sm md:text-base font-light">
                    {active.content}
                </div>
            </div>
        </div>
    )
}

export default Service