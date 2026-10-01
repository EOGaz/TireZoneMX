import { useEffect, useState } from 'react';
import type { Quote } from './data';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Brands } from './components/Brands';
import { Sectors } from './components/Sectors';
import { SizeDecoder } from './components/SizeDecoder';
import { Benefits } from './components/Benefits';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Adds .is-visible to every [data-reveal] element the first time it scrolls into view,
// including ones rendered later (e.g. the second step of the contact form).
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }),
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    const scan = () => document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => io.observe(el));
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}

export default function App() {
  // Quote started from the hero or a sector card; bumping `n` remounts the form with it.
  const [quote, setQuote] = useState<(Quote & { n: number }) | null>(null);
  useReveal();

  const startQuote = (q: Quote) => {
    setQuote((prev) => ({ ...q, n: (prev?.n ?? 0) + 1 }));
    requestAnimationFrame(() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }));
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero onQuote={startQuote} />
        <Brands />
        <Sectors onQuote={startQuote} />
        <SizeDecoder onQuote={startQuote} />
        <Benefits />
        <About />
        <Stats />
        <Process />
        <Testimonials />
        <Faq />
        <Contact key={quote?.n ?? 0} initial={quote} />
      </main>
      <Footer />
    </>
  );
}
