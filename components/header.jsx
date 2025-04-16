import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/images/logo2.png';

const navItems = [
    { linkText: 'Home', href: '/#banner' },
    { linkText: 'Services', href: '/#services' },
    { linkText: 'About Us', href: '/#About' },
    { linkText: 'Blogs', href: '/#blogs' },
    { linkText: 'Contact Us', href: '/#contact' },
];

export function Header() {
    return (
        <>

            <nav className="navbar navbar-expand-lg">
                <div className="container d-block">
                    <div className='d-flex justify-content-between'>
                        <Link href="/">
                            <Image src={logo} alt="logo" width={230} height={80} />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                            {!!navItems?.length && (
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                    {navItems.map((item, index) => (
                                        <li className='nav-item' key={index}>
                                            <Link href={item.href} className="nav-link">
                                                {item.linkText}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
