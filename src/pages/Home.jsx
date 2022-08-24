import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Map from '../components/Map'
import ContentDistr from '../components/ContentDistr'
import Partners from '../components/Partners'
import Service from '../components/Service'
import Footer from '../components/Footer'

import serviceImage from '../assets/Rectangle_8.png'
import productImage from '../assets/Rectangle_10.png'
import OOTImage from '../assets/Rectangle_9.png'

const serviceMenu = [
    {
        title: 'White Labeling',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        title: 'Co-branding',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        title: 'Content Acquisition',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        title: 'Live Streaming',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
]

const productsMenu = [
    {
        title: 'Full Production Facility',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        title: 'Encoding & Transcoding Services',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        title: 'Dubbing & Subtitling',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        title: 'Video Editing, AR/VR & Post-Production SFX',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
]

const Home = () => {
    return (
        <div className='bg-dark-primary-bg text-white'>
            <Header />
            <Banner />
            <Map />
            <ContentDistr />
            <Partners />
            <Service
                data={serviceMenu}
                image={serviceImage}
                name="Services"
            />
            <div className="bg-cover bg-no-repeat bg-center h-screen relative"
                style={{ backgroundImage: `url(${OOTImage})` }}
            >
                <div className="absolute px-6 md:px-0 top-4 text-center md:text-left md:top-[200px] md:pl-[66px] md:pr-[260px]">
                    <h3 className='text-2sm md:text-base font-semibold text-white mb-5 md:mb-6 uppercase'>OTT Platform</h3>
                    <p className='text-sm md:text-base font-light text-white text-justify'>
                        Sivoo’s OTT platform is a market-ready, white-labelable (hardware/software) OTT
                        dongle aiming to reach cord Nevers, cord cutters, and multi-room subscribers. Our
                        platform changes the game for operators by expanding customer reach with minimal
                        acquisition costs. Take back control of the OTT device and offer the TV experience
                        you envisioned by easily and quickly connecting and growing your subscriber base on
                        your terms, while providing the apps and content consumers know and watch.

                    </p>
                </div>
            </div>
            <Service
                data={productsMenu}
                image={productImage}
                name="Production Services"
            />
            <Footer />
        </div>
    )
}

export default Home