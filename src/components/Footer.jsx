import React from 'react'
import logo from '../assets/wordmark_tv.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fafaceb } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className='md:py-[110px] md:pl-[60px] md:pr-[120px] pt-6 pb-11 px-6 flex  flex-col md:flex-row  items-start justify-between'>
            <div className="flex flex-col md:flex-row items-start justify-start">
                <div className="mr-[80px] mb-3 md:mb-0">
                    <img src={logo} alt="" />
                </div>
                <div className="flex items-start justify-start flex-wrap">
                    <ul className='mr-[45px]'>
                        <li className='text-sm text-current font-light mb-4'>Services</li>
                        <li className='text-sm text-current font-light mb-4'>Press & Media</li>
                        <li className='text-sm text-current font-light mb-4'>FAQs</li>
                    </ul>
                    <ul className='mr-[45px]'>
                        <li className='text-sm text-current font-light mb-4'>For Investors</li>
                        <li className='text-sm text-current font-light mb-4'>SivooTV</li>
                    </ul>
                    <ul className='mr-[45px]'>
                        <li className='text-sm text-current font-light mb-4'>Terms of Service</li>
                        <li className='text-sm text-current font-light mb-4'>Privacy Policy</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-col">
                <div className="">
                    <div className="text-sm text-current font-medium mb-4">Contact Us</div>
                    <p className="text-sm text-current font-light mb-8">123 Address st. <br />
                        Email @email.com</p>
                </div>
                <div className="flex items-center justify-center mb-9 mt-7 md:my-0">
                    <img src={facebook} alt="" className='mr-4' />
                    <img src={instagram} alt="" className='mr-4' />
                    <img src={twitter} alt="" className='mr-4' />
                    <img src={linkedin} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer