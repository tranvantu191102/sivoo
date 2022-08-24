import React from 'react'
import banner from '../assets/Rectangle_4.png'

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})` }}
            className="w-full h-[calc(100vh-80px)] mt-[80px] bg-center bg-no-repeat bg-cover relative"
        >
            <div className="absolute bottom-0 left-0 px-6 pb-5 md:pl-24 md:pr-60 md:pt-24 md:pb-16">
                <h3 className='text-white text-base md:text-lg font-normal mb-4 md:mb-10'>Trust Sivoo with your enterprise</h3>
                <p className='text-white text-sm md:text-base font-light'>
                    From our alliance with global data centers, who support our CDN infrastructure,
                    to the mobile and OTT apps that leverage its breadth, we develop platforms for
                    video ingestion, encoding, delivery and viewing. Our mobile platform partnership
                    allows us to offer a class-leading video experience to millions of users in 100s
                    of countries will elevate users and bring eyes to content providers and advertisers.
                </p>
            </div>
        </div>
    )
}

export default Banner