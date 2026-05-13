import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream py-8 border-t-8 border-deepRed mt-auto relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(to right, #F5F0E6 1px, transparent 1px), linear-gradient(to bottom, #F5F0E6 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        <div className="flex flex-col mb-4 md:mb-0">
          <div className="font-display text-3xl font-black tracking-widest mb-2 uppercase text-white">
            TRAVELEASY <span className="text-vintageCyan block sm:inline">TRANSPORT</span>
          </div>
          <div className="font-retro text-xs opacity-80 uppercase font-bold text-vintageCyan">
            © 2026 INDIAN RAILWAYS & BUS TRANSIT ALLIED
          </div>
        </div>

        <div className="bg-cream/10 p-4 border-2 border-vintageCyan/50 card-retro-style">
          <h3 className="font-retro text-vintageCyan font-bold text-sm mb-3 uppercase tracking-wider border-b border-vintageCyan/30 pb-1">STATION CONTACT BOARD</h3>
          <div className="space-y-2 font-display">
            <a href="mailto:srikrishnanpranav@gmail.com" className="flex items-center gap-2 hover:text-vintageCyan transition-colors">
              <Mail className="w-4 h-4" /> srikrishnanpranav@gmail.com
            </a>
            <a href="tel:9579773239" className="flex items-center gap-2 hover:text-vintageCyan transition-colors">
              <Phone className="w-4 h-4" /> 9579773239
            </a>
          </div>
        </div>

        <div className="flex items-end justify-end">
           <div className="bg-vintageCyan text-charcoal font-retro font-bold px-4 py-2 border-2 border-cream transform rotate-2 shadow-[4px_4px_0px_0px_rgba(245,240,230,0.8)]">
             <span className="text-xs uppercase tracking-widest block opacity-80">PROUDLY</span>
             MADE BY S PRANAV
           </div>
        </div>
      </div>
    </footer>
  );
}
