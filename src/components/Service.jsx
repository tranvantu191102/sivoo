import React, { useState } from 'react'

import arrowRight from '../assets/ArrowRight.png'
import arrowLeft from '../assets/ArrowLeft.png'

const Service = ({ data, image, name }) => {

    const [active, setActive] = useState(data[0])
    const [indexActive, setIndexActive] = useState(0)

    const hanldeActiveItem = (item, index) => {
        setActive(item)
        setIndexActive(index)
    }

    const handleClickRightSlide = () => {
        const index = indexActive + 1 >= data.length ? 0 : indexActive + 1
        setActive(data[index])
        setIndexActive(index)

    }

    const handleClickLeftSlide = () => {
        const index = indexActive - 1 < 0 ? data.length - 1 : indexActive - 1
        setActive(data[index])
        setIndexActive(index)
    }

    return (
        <div style={{ backgroundImage: `url(${image})` }}
            className="bg-cover bg-no-repeat bg-center h-[calc(100vh)] relative"
        >
            <h2 className='font-semibold text-base uppercase text-white text-center pt-[60px]'>{name}</h2>
            <div className="absolute top-40 md:top-32 lg:top-40 left-[60px] cursor-pointer p-2"
                onClick={handleClickLeftSlide}>
                <img src={arrowLeft} alt="" />
            </div>
            <div className="absolute top-40 md:top-32 lg:top-40  right-[60px] cursor-pointer p-2"
                onClick={handleClickRightSlide}>
                <img src={arrowRight} alt="" />
            </div>
            <div className="block md:hidden w-full text-center absolute top-40 pt-4 pointer-events-none  transform   uppercase text-2sm font-semibold cursor-pointer">{active.title}</div>

            <div className="absolute top-1/2 -translate-y-1/2 lg:-translate-y-0 flex flex-col items-start justify-center ">
                <div className="flex items-center w-full justify-center md:justify-start md:pl-[60px] flex-wrap">
                    {
                        data.map((item, index) => (
                            <div className={`hidden md:block mr-[50px] mb-[30px] uppercase text-2sm font-semibold relative cursor-pointer
                             ${active.title === item.title ? 'text-active menu-active transition-all duration-200 ease-linear' : 'text-white'}
                             `}
                                key={index}
                                onClick={() => hanldeActiveItem(item, index)}
                            >
                                {item.title}
                            </div>
                        ))
                    }

                </div>

            </div>
            {
                data.map((item, index) => (
                    <div className={`absolute top-[50%]  lg:top-[60%] w-[80%] lg:pl-[60px] px-6 mt-[30px] 
                        text-white text-sm md:text-base ${active.title === item.title ? 'visible translate-x-0 opacity-1  transition-all duration-500 ease-in-out' :
                            'invisible  opacity-0  transform -translate-x-40 lg:translate-x-40 '}
                    font-light`}
                        key={index}>
                        {item.content}
                    </div>
                ))
            }
        </div>
    )
}

export default Service