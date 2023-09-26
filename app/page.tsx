import CLientHero from '@/components/ClientHero'
import { Header } from './Header'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import AboutUs from './AboutUs'

export default function Home() {
  return (
    <div>
      <Header />
      <CLientHero />
      <AboutUs />
    </div>
  )
}
