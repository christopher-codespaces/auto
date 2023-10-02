import React from 'react';
import { Services,Contact ,Whatsapp} from '../components';
import Head from 'next/head';

function Service() {
  return (
    <>
      <Head>
        <title>Our Auto Electrical and Diagnostics Services | Your {`Vehicle's`} Solution</title>
        <meta name="description" content="Explore our comprehensive auto electrical and diagnostics services. Our experienced technicians specialize in diagnosing and repairing various electrical issues in vehicles." />
        <meta name="keywords" content="auto electrical, diagnostics, vehicle repair, battery replacement, diagnostic testing" />
      </Head>

      <Services />
      <Contact  />
      <Whatsapp/>
    </>
  );
}

export default Service;
