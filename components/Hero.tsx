import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-60 scale-105"
          >
            <source src="https://videos.pexels.com/video-files/6873587/6873587-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center">
        {/* Animated Headline */}
        <div className="overflow-hidden mb-4">
          <motion.h2 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-neon-blue font-bold tracking-widest uppercase text-sm md:text-base mb-4"
          >
            The Future Is Loaded
          </motion.h2>
        </div>

        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: 150 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="font-display font-black text-6xl md:text-9xl tracking-tighter text-white leading-[0.9]"
          >
            X-DRIVE
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-white">
              2025
            </span>
          </motion.h1>
        </div>

        {/* Headlights Animation - Overlaying the video for effect */}
        <div className="relative w-full max-w-4xl mx-auto h-64 mt-[-50px] md:mt-[-100px] flex justify-between items-center px-10 md:px-32 pointer-events-none opacity-50 mix-blend-screen">
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="w-32 h-32 md:w-64 md:h-64 bg-gradient-radial from-neon-blue/80 to-transparent blur-3xl"
            />
             <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="w-32 h-32 md:w-64 md:h-64 bg-gradient-radial from-neon-blue/80 to-transparent blur-3xl"
            />
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="mt-8"
        >
            <button className="group relative px-8 py-4 bg-transparent border border-white/20 overflow-hidden rounded-none backdrop-blur-sm">
                <span className="relative z-10 text-white font-bold tracking-widest uppercase text-sm group-hover:text-black transition-colors duration-300">Explore Performance</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-in-out" />
            </button>
        </motion.div>
      </div>
      
      {/* Scroll Hint */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-xs tracking-widest uppercase z-20"
      >
        Scroll to Ignite
      </motion.div>
    </section>
  );
};

export default Hero;