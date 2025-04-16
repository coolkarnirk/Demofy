import React from 'react'
import Image from 'next/image'

export default function Blogs() {
    return (
        <>
            <section className="blogs-section" id='blogs'>
                <div className="container">
                    <p className="section-subtitle text-center">BLOGS</p>
                    <h2 className="section-title text-center mb-5">Latest Stock Market Insights</h2>

                    <div className="row g-4">
                        {[
                            {
                                title: 'Understanding Stock Market Cycles',
                                image: '/images/market.png',
                                excerpt: 'Explore the different phases of stock market cycles and how to navigate them effectively.',
                            },
                            {
                                title: 'Top 5 Indicators Every Trader Should Know',
                                image: '/images/market1.jpg',
                                excerpt: 'Dive into the technical indicators that help traders make informed decisions.',
                            },
                            {
                                title: 'The Psychology of Trading',
                                image: '/images/market.png',
                                excerpt: 'How emotions impact your trades — and how to stay disciplined.',
                            },
                            {
                                title: 'How to Read a Stock Chart Like a Pro',
                                image: '/images/market1.jpg',
                                excerpt: 'Learn to interpret candlestick patterns, trends, and volumes.',
                            },
                            {
                                title: 'Building a Diversified Portfolio',
                                image: '/images/market.png',
                                excerpt: 'Discover strategies to balance risk and reward in your investments.',
                            },
                            {
                                title: 'ETFs vs. Mutual Funds: What’s Better?',
                                image: '/images/market1.jpg',
                                excerpt: 'We break down the pros and cons of ETFs and mutual funds.',
                            },
                        ].map((blog, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="blog-card h-100">
                                    <div className="blog-img">
                                        <Image src={blog.image} alt={blog.title} width={400} height={250} className="img-fluid" />
                                    </div>
                                    <div className="blog-content p-3">
                                        <h4>{blog.title}</h4>
                                        <p>{blog.excerpt}</p>
                                        <a href="#" className="read-more">Read More →</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}
