import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClient from './bootstrap-client';

export const metadata = {
    title: 'Dinar Capital Advisors LLP',
    description: 'Using Bootstrap 5 in Next.js',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/images/logo2.png" sizes="any" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
            </head>
            <body>
                <Header />
                <main className="grow">
                    <BootstrapClient />
                    {children}</main>
                <Footer />

            </body>
        </html>
    );
}
