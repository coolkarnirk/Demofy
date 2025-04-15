import React from 'react'
import Image from 'next/image'

export default function LeftRightSection() {
    return (
        <>
            <section className="info-section py-5 mt-5">
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
