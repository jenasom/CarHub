import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleOpenModal = () => setIsModalOpen(true);
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Reset form after animation finishes
    setTimeout(() => {
      setFormStatus('idle');
      setFormData({ name: '', email: '' });
    }, 500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate API delay for dramatic effect
    setTimeout(() => {
      const existingOrders = JSON.parse(localStorage.getItem('x-drive-preorders') || '[]');
      const newOrder = {
        id: Date.now(),
        ...formData,
        timestamp: new Date().toISOString(),
        model: 'X-DRIVE PLAID'
      };
      
      localStorage.setItem('x-drive-preorders', JSON.stringify([...existingOrders, newOrder]));
      setFormStatus('success');

      // Auto close after success
      setTimeout(() => {
        handleCloseModal();
      }, 2000);
    }, 1500);
  };

  return (
    <section id="pricing" className="bg-black py-32 px-6 border-t border-neutral-900 relative">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
        >
            RESERVE YOUR <span className="text-neon-blue">FUTURE</span>
        </motion.h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">
            Limited production run for the 2025 Founder's Series. Secure your allocation today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Card 1 */}
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -10 }}
            className="p-8 md:p-12 border border-neutral-800 bg-neutral-900/10 rounded-2xl relative overflow-hidden group"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-0" />
            <div className="relative z-10 text-left">
                <h3 className="text-2xl font-bold text-white mb-2">X-DRIVE CORE</h3>
                <p className="text-neutral-500 mb-8">Dual Motor All-Wheel Drive</p>
                <div className="text-4xl font-display font-bold text-white mb-8">
                    $89,900
                </div>
                <ul className="space-y-4 mb-8 text-neutral-400 text-sm">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-neon-blue rounded-full"></span> 0-100 km/h in 3.1s</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-neon-blue rounded-full"></span> 600km Range</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-neon-blue rounded-full"></span> Autopilot Basic</li>
                </ul>
                <button className="w-full py-4 border border-white/20 text-white font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
                    Configure
                </button>
            </div>
        </motion.div>

        {/* Card 2 - Premium */}
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -10 }}
            className="p-8 md:p-12 border border-neon-blue/30 bg-neutral-900/30 rounded-2xl relative overflow-hidden group"
        >
             <div className="absolute top-0 right-0 bg-neon-blue text-black text-xs font-bold px-4 py-1 uppercase tracking-widest">
                Founder Edition
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/5 to-black/90 z-0" />
            <div className="relative z-10 text-left">
                <h3 className="text-2xl font-bold text-white mb-2">X-DRIVE PLAID</h3>
                <p className="text-neutral-500 mb-8">Tri-Motor Performance</p>
                <div className="text-4xl font-display font-bold text-white mb-8">
                    $124,900
                </div>
                <ul className="space-y-4 mb-8 text-neutral-300 text-sm">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-neon-blue rounded-full"></span> 0-100 km/h in 1.9s</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-neon-blue rounded-full"></span> 800km Range</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-neon-blue rounded-full"></span> Full Self-Driving</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-neon-blue rounded-full"></span> Carbon Ceramic Brakes</li>
                </ul>
                <button 
                  onClick={handleOpenModal}
                  className="w-full py-4 bg-neon-blue text-black font-bold tracking-widest uppercase hover:bg-white transition-colors shadow-[0_0_20px_rgba(0,243,255,0.4)]"
                >
                    Reserve Now
                </button>
            </div>
        </motion.div>
      </div>

      {/* Reservation Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-neutral-900 border border-neon-blue/50 p-8 rounded-2xl shadow-[0_0_50px_rgba(0,243,255,0.2)] overflow-hidden"
            >
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/20 blur-[50px] -mr-10 -mt-10" />

              <h3 className="text-2xl font-display font-bold text-white mb-2">SECURE YOUR KEY</h3>
              <p className="text-neutral-400 text-sm mb-8">Enter your details to join the priority waiting list for the X-Drive 2025.</p>

              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-8 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-neon-green/20 flex items-center justify-center mb-4 text-neon-green border border-neon-green/50">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">RESERVATION CONFIRMED</h4>
                  <p className="text-neutral-400 text-sm">Welcome to the future. We'll be in touch.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-neon-blue">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-black/50 border border-neutral-700 text-white px-4 py-3 rounded focus:outline-none focus:border-neon-blue focus:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all"
                      placeholder="Elon Musk"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-neon-blue">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-black/50 border border-neutral-700 text-white px-4 py-3 rounded focus:outline-none focus:border-neon-blue focus:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all"
                      placeholder="elon@future.com"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-4 bg-neon-blue text-black font-bold tracking-widest uppercase hover:bg-white transition-colors relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      'Confirm Reservation'
                    )}
                  </button>
                </form>
              )}

              {/* Close Button */}
              <button 
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Pricing;