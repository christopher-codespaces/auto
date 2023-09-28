import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Pass, Hero, CTA, Model, Contact, Services } from '../components'
import Head from "next/head"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Expert Auto Electrical and Diagnostics Services | Your {`Vehicle's`} Solution</title>
        <meta name="description" content="Looking for reliable and efficient auto electrical and diagnostics services? Our experienced technicians specialize in diagnosing and repairing a wide range of electrical issues in vehicles." />
        <meta name="keywords" content="auto electrical, diagnostics, vehicle repair, battery replacement, diagnostic testing" />
      </Head>

      <Pass />

      <CTA />
      <Services />
      <Contact />
    </div>
  )
}
