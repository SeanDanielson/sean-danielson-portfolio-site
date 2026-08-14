import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import CaseStudy from "@/components/CaseStudy";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Services />
        <CaseStudy />
        <Education />
      </main>
      <Footer />
    </>
  );
}
