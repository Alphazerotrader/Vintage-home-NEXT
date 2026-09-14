import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Portfolio from "@/components/Portfolio";
import Architecture from "@/components/Architecture";
import Investors from "@/components/Investors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Portfolio />
        <Architecture />
        <Investors />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
