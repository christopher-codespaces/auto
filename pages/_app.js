import '@/styles/globals.css'
import { NavBar, Footer } from '../components'
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="description" content="Reliable and efficient auto electrical and diagnostics services. Battery replacements, advanced diagnostic testing, and more. Get your vehicle back on the road. Schedule your appointment now." />
        <meta name="keywords" content="auto electrical, diagnostics, vehicle repair, battery replacement, diagnostic testing, vehicle maintenance" />
        <meta property="og:title" content="Your {`Vehicle's`} In Save Hands" />
        <meta property="og:description" content="Looking for reliable and efficient auto electrical and diagnostics services? Our experienced technicians specialize in diagnosing and repairing a wide range of electrical issues in vehicles." />
        <meta property="og:image" content="https://xtremeautoelectrics.co.za/wp-content/uploads/elementor/thumbs/pexels-kindel-media-9799996-q54u5fd0poru43n1mdd59wte65v1isgmdem2c219jc.jpg" />
        <meta property="og:url" content="https://xtremeautoelectrics.co.za/wp-content/uploads/elementor/thumbs/pexels-erik-mclean-4758171-q54qmfe3r8gvrlqzd5h7jwk22zckaqra5fn0b28o7c.jpg" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
