import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CarPreview from './components/CarPreview';
import Stats from './components/Stats';
import RoadDrive from './components/RoadDrive';
import DawnTransition from './components/DawnTransition';
import Interior from './components/Interior';
import Pricing from './components/Pricing';
import { motion, useScroll, useSpring } from 'framer-motion';

const App = () => {
  // Smooth Scroll Setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative w-full min-h-screen bg-black text-slate-200">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-neon-blue origin-left z-50 mix-blend-difference"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="relative z-10 flex flex-col w-full">
        <Hero />
        <CarPreview />
        <Stats />
        <RoadDrive />
        <DawnTransition />
        <Interior />
        <Pricing />
      </main>

      <footer className="py-12 border-t border-neutral-900 bg-black text-center text-neutral-500 text-sm">
        <p>&copy; 2025 X-DRIVE AUTOMOTIVE. ENGINEERED FOR DOMINANCE.</p>
      </footer>
    </div>
  );
};

export default App;