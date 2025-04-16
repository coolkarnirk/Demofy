import React from 'react'
import Image from 'next/image'

export default function LeftRightSection() {
    return (
        <>
            <section className="info-section py-5 mt-5" id='services'>
                <div className="container pb-4">
                    <div className='text-center'>
                        <h2 className="section-title">Our Services</h2>
                        <p className="section-description w-75 mx-auto">
                            Founded by a team of analysts, traders, and tech enthusiasts, our platform was created to make investing in the stock market more accessible to everyone.
                            We believe in the power of data, education, and simplicity — that's why we built tools that empower investors to make informed decisions with confidence.
                        </p>
                    </div>
                </div>
                {/* Section 1: Image Left, Content Right */}
                <div className="info-row container d-flex flex-wrap align-items-center pt-5 pb-5 mb-5">
                    <div className="col-md-6 pb-5">
                        <Image src="/images/market.png" alt="Stock Image 1" width={600} height={400} className="img-fluid shadow rounded-4" />
                    </div>
                    <div className="col-md-6 ps-md-5 pt-4 pt-md-0">
                        <h2 className='fs-2 mb-0'>Smart Investing Starts Here</h2>
                        <h3 className='fs-2 pb-2'>Empowering your financial journey</h3>
                        <p className='pb-4 mb-4 pe-xl-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Morbi luctus metus vel magna fermentum, vitae fringilla augue imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Morbi luctus metus vel magna fermentum, vitae fringilla augue imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Morbi luctus metus vel magna fermentum, vitae fringilla augue imperdiet.</p>
                        <button className="btn btn-primary bg-black py-2 px-4 hero-btn">Book Demo</button>
                    </div>
                </div>

                {/* Section 2: Image Right, Content Left */}
                <div className="info-row container d-flex flex-wrap align-items-center flex-md-row-reverse">
                    <div className="col-md-6 pb-5">
                        <Image src="/images/market1.jpg" alt="Stock Image 2" width={600} height={400} className="img-fluid shadow rounded-4" />
                    </div>
                    <div className="col-md-6 pe-md-5 pt-4 pt-md-0">
                        <h2 className='fs-2 mb-0'>Analyze Trends Instantly</h2>
                        <h3 className='fs-2 pb-2'>Your one-stop financial dashboard</h3>
                        <p className='pb-4 mb-4 pe-xl-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Morbi luctus metus vel magna fermentum, vitae fringilla augue imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Morbi luctus metus vel magna fermentum, vitae fringilla augue imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Morbi luctus metus vel magna fermentum, vitae fringilla augue imperdiet.</p>
                        <button className="btn btn-primary bg-black py-2 px-4 hero-btn">Book Demo</button>
                    </div>
                </div>
            </section>

        </>
    )
}
