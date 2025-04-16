import Hero from 'components/Hero';
import AboutUs from 'components/about-us';
import Blogs from 'components/blogs';
import ContactUs from 'components/contact-us';
import LeftRightSection from 'components/left-right-section';
import Link from 'next/link';


export default function Page() {
    return (
        <>
            <Hero />
            <LeftRightSection/>
            <AboutUs />
            <Blogs />
            <ContactUs />
        </>
    );
}