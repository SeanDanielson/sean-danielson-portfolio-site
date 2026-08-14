import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import CaseStudy from "@/components/CaseStudy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Services />
        <CaseStudy />
      </main>
      <Footer />
    </>
  );
}
