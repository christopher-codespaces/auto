import Image from 'next/image'
import { Inter } from 'next/font/google'
import {NavBar ,Hero,CTA,Model,Contact,Footer} from '../components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (


  <div>
        <NavBar />
        <Hero />
        <CTA />
        <Model />
        <Contact/>
        <Footer/>
</div>
  )
}
