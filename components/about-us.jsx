import React from 'react'
import Image from 'next/image'

export default function AboutUs() {
    return (
        <>
            <section className="about-modern-section" id='About'>
                <div className="container ">
                    <div className="row align-items-center">
                        {/* Left Content */}
                        <div className="col-md-6 mb-4 mb-md-0">
                            <div className="shadow bg-white rounded-3 p-5">
                                <p className="section-subtitle">ABOUT US</p>
                                <h2 className="section-title">Our Mission is to Simplify Stock Market Investing</h2>
                                <p className="section-description">
                                    At Dinar Capital Advisors, we strive to be a trusted partner on your journey to financial freedom. 
                                    Through expert financial planning and disciplined wealth management, we deliver personalized, unbiased advice that transforms goals into actionable outcomes and helps build a secure and prosperous future.
                                </p>
                            </div>
                        </div>

                        {/* Right Image & Widgets */}
                        <div className="col-md-6">
                            {/* <div className="about-image mb-4">
                            <Image
                                src="/images/market.png"
                                alt="About Us"
                                width={150}
                                height={150}
                                className="img-fluid rounded"
                            />
                        </div> */}

                            <div className="about-widgets d-flex flex-wrap gap-3">
                                <div className="widget-box">
                                    <Image src="/images/calendar.png" alt='calender' width={40} height={40} className='img-fluid pb-3' />
                                    <h4 className='mb-0 fs-1'>10+</h4>
                                    <p>Year of experience</p>
                                </div>
                                <div className="widget-box">
                                    <Image src="/images/trader.png" alt='trader' width={40} height={40} className='img-fluid pb-3' />
                                    <h4 className='mb-0 fs-1'>50K+</h4>
                                    <p>Active Traders</p>
                                </div>
                                <div className="widget-box">
                                    <Image src="/images/financial-planning.png" alt='accuracy' width={40} height={40} className='img-fluid pb-3' />
                                    <h4 className='mb-0 fs-1'>99.9%</h4>
                                    <p>End-to-End Financial Solutions</p>
                                </div>
                                <div className="widget-box">
                                    <Image src="/images/real-time.png" alt='real-time' width={40} height={40} className='img-fluid pb-3' />
                                    <h4 className='mb-0 fs-1'>120+</h4>
                                    <p>Real-time Market Feeds</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
