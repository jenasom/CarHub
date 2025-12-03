import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const RoadDrive = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const videoOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  // Generate stable random data for lines
  const lines = useMemo(() => {
    return [...Array(15)].map((_, i) => ({
      id: i,
      top: Math.random() * 100, // percentage
      width: Math.random() * 300 + 100, // px
      duration: Math.random() * 2 + 1, // seconds (slower for interaction)
      delay: Math.random() * 2,
    }));
  }, []);

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-black overflow-hidden">
      
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Cinematic Driving Video */}
        <motion.div 
            style={{ opacity: videoOpacity }}
            className="absolute inset-0 w-full h-full z-0"
        >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10" />
            
            <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover scale-110"
            >
                {/* Dark neon tunnel drive */}
                <source src="https://videos.pexels.com/video-files/2053648/2053648-uhd_3840_2160_30fps.mp4" type="video/mp4" />
            </video>
        </motion.div>

        {/* Interactive Speed Lines Overlay */}
        <motion.div 
          style={{ opacity: videoOpacity }}
          className="absolute inset-0 w-full h-full z-10 mix-blend-screen overflow-hidden"
        >
          {lines.map((line) => (
             <motion.div 
               key={line.id}
               className="absolute h-[2px] bg-neon-blue rounded-full cursor-crosshair pointer-events-auto"
               style={{
                 top: `${line.top}%`,
                 width: `${line.width}px`,
                 left: '-100%', // Start off-screen
               }} 
               animate={{ 
                 x: ['0vw', '200vw'], // Move across viewport
                 opacity: [0, 0.5, 0] 
               }}
               transition={{ 
                 duration: line.duration, 
                 repeat: Infinity, 
                 ease: "linear", 
                 delay: line.delay 
               }}
               whileHover={{ 
                 scaleY: 15, // Significant flare up
                 opacity: 1,
                 backgroundColor: '#0aff60', // Neon Green flare
                 boxShadow: '0 0 25px 5px rgba(10, 255, 96, 0.8)',
                 zIndex: 50,
               }}
             >
                {/* Hit area expander for easier hovering */}
                <div className="absolute inset-0 -top-4 -bottom-4" />
             </motion.div>
          ))}
        </motion.div>

        {/* Floating Content */}
        <motion.div 
           style={{ y: textY, opacity: videoOpacity }}
           className="relative z-20 text-center mix-blend-difference pointer-events-none"
        >
            <h3 className="text-neon-blue font-bold tracking-[1em] uppercase text-xs mb-4">Simulation</h3>
            <h2 className="text-8xl md:text-[12rem] font-display font-black text-white uppercase leading-none opacity-80">
                VELOCITY<br/>MODE
            </h2>
            <p className="text-white/60 text-sm tracking-widest mt-8 uppercase">
                Active Aerodynamics • Downforce Optimized
            </p>
        </motion.div>

        {/* Center UI Reticle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] border border-white/5 rounded-full z-10 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-4 bg-neon-blue/50" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-4 bg-neon-blue/50" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-1 bg-neon-blue/50" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-1 bg-neon-blue/50" />
        </div>

      </div>
    </section>
  );
};

export default RoadDrive;