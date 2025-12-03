import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CarPreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="preview" ref={containerRef} className="relative h-[150vh] bg-metallic flex flex-col items-center justify-center overflow-hidden">
      
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center">
        <motion.div style={{ opacity }} className="text-center z-20 mb-10">
            <h3 className="text-neon-blue font-bold tracking-widest mb-2 uppercase text-sm">360° Control</h3>
            <h2 className="text-4xl md:text-7xl font-display font-bold text-white leading-tight">
                PRECISION<br />ENGINEERING
            </h2>
        </motion.div>

        {/* Car Image Placeholder representing the vehicle */}
        <motion.div 
            style={{ x, rotate, scale }}
            className="relative w-full max-w-5xl aspect-video z-10 flex items-center justify-center"
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20 opacity-80"></div>
             {/* Sleek Side Profile */}
            <img 
                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1600" 
                alt="X-Drive Side Profile" 
                className="w-full h-full object-cover rounded-xl shadow-[0_0_100px_rgba(0,243,255,0.1)] grayscale contrast-125 brightness-90"
            />
            
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-xl border border-white/10 pointer-events-none"></div>
        </motion.div>

        <motion.p 
            style={{ opacity }}
            className="absolute bottom-20 text-neutral-400 max-w-md text-center text-sm md:text-base leading-relaxed px-6"
        >
            Dominance isn't given. It's engineered. The X-Drive 2025 features active aerodynamics and a chassis built for the unknown.
        </motion.p>
      </div>
    </section>
  );
};

export default CarPreview;