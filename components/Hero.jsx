import React from 'react'

export default function Hero() {
    return (
        <>
            <section className="hero-section position-relative" id='banner'>
                <div className="hero-content container text-center text-white">
                    <h1 className="hero-title">Invest Smarter, Grow Faster</h1>
                    <p className="hero-subtitle">Track the market trends and make informed decisions effortlessly.</p>
                    <button className="btn btn-primary hero-btn">Get Started</button>
                </div>

                {/* <div className="hero-curve">
                    <svg viewBox="0 0 1440 320">
                        <path fill="#fff" fillOpacity="1" d="M0,192L60,181.3C120,171,240,149,360,144C480,139,600,149,720,149.3C840,149,960,139,1080,117.3C1200,96,1320,64,1380,48L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                    </svg>
                </div> */}
            </section>
        </>
    )
}
