import React from 'react';
import { About,Contact } from '../components';
import Head from 'next/head';

function Service() {
  return (
    <>
      <Head>
        <title>Our Auto Electrical and Diagnostics Services | About</title>
        <meta name="description" content="Explore our comprehensive auto electrical and diagnostics services. Our experienced technicians specialize in diagnosing and repairing various electrical issues in vehicles." />
        <meta name="keywords" content="auto electrical, diagnostics, vehicle repair, battery replacement, diagnostic testing" />
      </Head>

      <About />
      <Contact  />
    </>
  );
}

export default Service;
