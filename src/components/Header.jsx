import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/wordmark_tv.png'
import backgroundImage from '../assets/Mask_group_5.png'
import flagUs from '../assets/us.png'

const Header = () => {

    const [activeMobile, setActiveMobile] = useState(false)
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})` }}
            className="fixed inset-0 w-full h-[80px] bg-no-repeat bg-contain bg-center bg-dark-primary-bg z-[999]"
        >
            <div className="flex items-center justify-between px-6 h-full ">
                <div className="">
                    <img src={logo} alt="" />
                </div>
                <div className="block md:hidden text-base cursor-pointer ">
                    <FontAwesomeIcon icon={faBars} onClick={() => setActiveMobile(true)} />
                </div>
                <div className={`md:flex fixed md:relative items-center justify-center transition-all duration-200 ease-linear 
                ${activeMobile ? '   inset-0 top-0 left-0 flex-col bg-dark-primary-bg w-[50%] z-[999] translate-x-0 opacity-100 visible pointer-events-auto'
                        : ' invisible pointer-events-none  -translate-x-28 opacity-0 md:visible md:pointer-events-auto md:opacity-100 md:translate-x-0'}`}>
                    <div className="font-light text-base text-current mr-8 py-4 pl-2 md:pl-0 md:py-0">
                        <a href="/" className='font-light text-base text-current'>SivooTV</a>
                    </div>
                    <div className="font-light text-base text-current mr-8  py-4 pl-2 md:pl-0 md:py-0">
                        <a href="/" className='font-light text-base text-current'>Investor Relations</a>
                    </div>
                    <div className="font-light text-base text-current mr-8  py-4 pl-2 md:pl-0 md:py-0">
                        <a href="/" className='font-light text-base text-current'>Press & Media</a>
                    </div>
                    <div className="font-light text-base text-current flex items-center justify-start md:justify-center  py-4 pl-2 md:pl-0 md:py-0 cursor-pointer">
                        <span className='mr-2 font-normal'>EN</span>
                        <img src={flagUs} alt="" />
                    </div>

                </div>
                {
                    activeMobile &&
                    <div className="absolute block md:hidden inset-0 bg-[rgba(0,0,0,0.5)] w-full h-screen"
                        onClick={() => setActiveMobile(false)}></div>
                }

            </div>
        </div>
    )
}

export default Header