import Hero from './components/Hero';
import Features from './components/Features';
import HealthMonitoring from './components/HealthMonitoring';
import FeedingCare from './components/FeedingCare';
import InteractionEntertainment from './components/InteractionEntertainment';
import Pricing from './components/Pricing';
import ReadyToBring from './components/ReadyToBring';
import SeamlessInteraction from './components/SeamlessInteraction';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <HealthMonitoring />
        <FeedingCare />
        <InteractionEntertainment />
        <Pricing />
        <ReadyToBring />
        <SeamlessInteraction />
      </main>
      <Footer />
    </>
  );
}
