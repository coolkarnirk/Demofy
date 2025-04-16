import React from 'react'
import Image from 'next/image'

export default function ContactUs() {
    return (
        <>
            <section className="contact-glass-section" id='contact'>
                <div className="contact-overlay">
                    <div className="container d-flex justify-content-center align-items-center">
                        <div className="glass-form-box">
                            <h2 className="text-center mb-4">Let's Talk</h2>
                            <form>
                                <div className='d-flex gap-3'>
                                    <div className="mb-3 w-100">
                                        <input type="text" className="form-control" placeholder="Full Name" />
                                    </div>
                                    <div className="mb-3 w-100">
                                        <input type="email" className="form-control" placeholder="Email Address" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <input type="tel" className="form-control" placeholder="Phone Number" />
                                </div>
                                <div className="mb-4">
                                    <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary bg-white text-black px-4 py-2">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
