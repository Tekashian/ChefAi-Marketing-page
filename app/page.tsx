import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FutureVision from "@/components/FutureVision";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-light to-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <FutureVision />
      <CTA />
      <Footer />
    </main>
  );
}
