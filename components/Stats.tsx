import React from 'react';
import { motion } from 'framer-motion';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { id: 1, label: '0-100 km/h', value: '2.4s', sub: 'Hyper Acceleration' },
  { id: 2, label: 'Horsepower', value: '1,020', sub: 'Peak Output' },
  { id: 3, label: 'Range', value: '800km', sub: 'Solid State Battery' },
  { id: 4, label: 'Modes', value: '7', sub: 'Adaptive Terrain' },
];

const Stats = () => {
  return (
    <section id="stats" className="bg-black py-32 px-6 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-display font-bold text-white opacity-10"
          >
            PERFORMANCE
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white mt-[-20px] md:mt-[-40px] pl-2"
          >
            UNLEASHED
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1, 
                type: "spring", 
                stiffness: 100 
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative p-8 border border-neutral-800 bg-neutral-900/20 group hover:bg-neutral-900/50 transition-colors duration-500 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-neon-blue/20 blur-3xl -mr-10 -mt-10 transition-opacity opacity-0 group-hover:opacity-100" />

              <span className="block text-neutral-500 text-sm font-bold tracking-widest mb-4 uppercase">
                {stat.label}
              </span>
              <div className="overflow-hidden">
                <motion.h4 
                   initial={{ y: "100%" }}
                   whileInView={{ y: 0 }}
                   transition={{ duration: 0.5, delay: 0.2 + (index * 0.1), ease: "backOut" }}
                   viewport={{ once: true }}
                   className="text-5xl lg:text-6xl font-display font-black text-white mb-2"
                >
                  {stat.value}
                </motion.h4>
              </div>
              <p className="text-neon-blue text-xs uppercase tracking-wider">
                {stat.sub}
              </p>
              
              {/* Interactive Line */}
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-neon-blue"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;