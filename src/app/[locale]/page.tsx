import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import About from '@/components/About';
import Contact from '@/components/Contact';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Hero />
      <Services />
      {/* <CaseStudies /> */}
      <About />
      <Contact />
    </>
  );
}
