import { Hero } from '../components/sections/Hero'
import { Work } from '../components/sections/Work'
import { Services } from '../components/sections/Services'
import { About } from '../components/sections/About'
import { Contact } from '../components/sections/Contact'
import { Marquee } from '../components/shared/Marquee'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Work />
      <Services />
      <About />
      <Contact />
    </>
  )
}
