import React from 'react';
import { motion } from 'framer-motion';

const Interior = () => {
  return (
    <section id="interior" className="relative w-full h-screen bg-gunmetal overflow-hidden flex items-center justify-center">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-black">
         <img 
            src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1920" 
            alt="Interior Texture" 
            className="w-full h-full object-cover opacity-20 grayscale mix-blend-overlay"
         />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-neon-blue font-bold tracking-widest uppercase mb-4"
          >
            Sanctuary
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
          >
            INTELLIGENT<br />COCKPIT
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-neutral-400 leading-relaxed max-w-md"
          >
            Seamlessly integrated AI assistance, haptic feedback steering, and an immersive OLED panoramic display. The road is yours to command.
          </motion.p>

          <div className="mt-8 flex gap-4">
            {['Haptic', 'OLED', 'AI-Core'].map((tag, i) => (
                <motion.div 
                    key={tag}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + (i * 0.1) }}
                    className="px-4 py-2 border border-neutral-700 rounded-full text-xs text-neutral-300 uppercase tracking-wider"
                >
                    {tag}
                </motion.div>
            ))}
          </div>
        </div>

        {/* UI Simulation */}
        <div className="order-1 lg:order-2 relative h-[400px] w-full bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden shadow-2xl">
            {/* Screen Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/10 to-transparent" />
            
            {/* Dashboard UI */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64 rounded-full border-4 border-neutral-800 flex items-center justify-center">
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border-t-4 border-neon-blue shadow-[0_0_20px_#00f3ff]"
                    />
                    <div className="text-center">
                        <span className="block text-4xl font-display font-bold text-white">124</span>
                        <span className="text-xs text-neutral-500 uppercase tracking-widest">km/h</span>
                    </div>
                </div>
            </div>

            {/* Floating Widgets */}
            <motion.div 
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-4 right-4 w-40 h-24 bg-black/50 backdrop-blur-md rounded-lg border border-white/10 p-4"
            >
                <div className="w-full h-1 bg-neutral-800 rounded-full mb-2 overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '80%' }}
                        transition={{ delay: 1, duration: 1.5 }}
                        className="h-full bg-neon-green" 
                    />
                </div>
                <span className="text-xs text-neutral-400">Battery Optimal</span>
            </motion.div>

            <motion.div 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-4 left-4 w-48 h-16 bg-black/50 backdrop-blur-md rounded-lg border border-white/10 flex items-center px-4 gap-3"
            >
                <div className="w-8 h-8 rounded-full bg-neutral-800 animate-pulse" />
                <div>
                    <div className="h-2 w-20 bg-neutral-800 rounded mb-1" />
                    <div className="h-2 w-12 bg-neutral-800 rounded" />
                </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Interior;