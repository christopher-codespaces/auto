import React from 'react';
import { Contact,Whatsapp } from '../components';
import Head from 'next/head';

function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us for Auto Electrical and Diagnostics Services | Get in Touch</title>
        <meta name="description" content="Reach out to us for top-notch auto electrical and diagnostics services. Our experienced team is ready to assist you with any inquiries or service needs." />
        <meta name="keywords" content="contact, auto electrical services, diagnostics, vehicle repair, get in touch" />
      </Head>

      <Contact />
      <Whatsapp/>
    </>
  );
}

export default ContactPage;
