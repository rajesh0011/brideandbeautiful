import { Elsie, Montserrat, Spectral } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./globals.css";
import Footer from './Common/Footer';

const elsie = Elsie({
  weight: ['400', '900'], // Load specific weights
  subsets: ['latin'],
  variable: '--font-elsie',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});
const spectral = Spectral({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-spectral',
  display: 'swap',
});

export const metadata = {
  title: 'Bride and Beautiful',
  description: 'Bride and Beautiful',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${elsie.variable} ${spectral.variable}`}>
      <body>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
