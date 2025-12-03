import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const DawnTransition = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);
  const textScale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden flex items-center justify-center bg-black">
      {/* Cinematic Dawn Video - POV/Empty Road */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-gunmetal z-10 opacity-40" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover scale-110"
        >
          {/* Abstract POV Highway at Dawn/Dusk - No visible car body */}
          <source src="https://videos.pexels.com/video-files/3045618/3045618-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        </video>
      </div>

      <motion.div 
        style={{ opacity, y, scale: textScale }} 
        className="relative z-20 text-center px-6"
      >
        <h3 className="text-orange-400 font-bold tracking-[0.5em] uppercase text-sm mb-4 drop-shadow-md">
          Endless Horizons
        </h3>
        <h2 className="text-5xl md:text-8xl font-display font-black text-white tracking-tight leading-none drop-shadow-2xl">
          CHASE THE<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
            DAWN
          </span>
        </h2>
        <p className="mt-8 text-neutral-200 text-lg md:text-xl tracking-wide font-light max-w-2xl mx-auto drop-shadow-lg">
          With 800km range, the sun sets before you stop.
        </p>
      </motion.div>

      {/* Decorative gradient overlay at bottom to blend with next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gunmetal to-transparent z-10" />
    </section>
  );
};

export default DawnTransition;