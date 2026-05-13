import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div 
      className="fixed inset-0 flex flex-col items-center justify-center z-[100]"
      style={{
        backgroundColor: '#F5F0E6',
        backgroundImage: 'linear-gradient(to right, rgba(44, 62, 80, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(44, 62, 80, 0.05) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        backgroundBlendMode: 'normal'
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <div className="border-4 border-charcoal shadow-[8px_8px_0px_0px_rgba(44,62,80,1)] bg-white p-4 mb-16">
          <img 
            src="/src/assets/gifs/GIF.gif" 
            alt="Loading..." 
            className="w-64 h-64 object-cover"
          />
        </div>
        <motion.h1 
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="font-display text-4xl font-bold tracking-widest text-charcoal uppercase"
        >
          Loading...
        </motion.h1>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="bg-charcoal text-vintageCyan font-retro font-bold px-4 py-2 border-2 border-charcoal shadow-[4px_4px_0px_0px_rgba(42,157,143,1)]">
           MADE BY S PRANAV
        </div>
      </div>
    </div>
  );
}
