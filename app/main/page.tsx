// app/main/page.tsx
'use client'

import AyatQuran from '../components/AyatQuran'
import CoupleSection from '../components/CoupleSection'
import EventSection from '../components/EventSection'
import Footer from '../components/Footer'
import MusicPlayer from '../components/MusicPlayer'
import Doa from '../components/Doa'
import Hero from '../components/Hero'
import WeddingGift from '../components/WeddingGift'

export default function MainPage() {
  return (
    <main>
      <MusicPlayer />
      <Hero />
      <AyatQuran />
      <CoupleSection />
      <EventSection />
      <Doa />
      <WeddingGift />
      <Footer />
    </main>
  )
}
