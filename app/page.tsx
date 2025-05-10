import AyatQuran from "./components/AyatQuran";
import CoupleSection from "./components/CoupleSection";
import Hero from "./components/Hero";
import EventSection from "./components/EventSection";
import Doa from "./components/Doa";
import WeddingGift from "./components/WeddingGift";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";



export default function Home() {
  return (
    <div className="relative overflow-clip" id="home">
      <MusicPlayer />
      <Hero />
      <AyatQuran />
      <CoupleSection />
      <EventSection />
      <Doa />
      <WeddingGift />
      <Footer />
    </div>
  );
}
