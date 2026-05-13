import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Calendar, Train, Bus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import imgNewTrain from '../assets/images/newtrain.jpg';
import imgNewTrain2 from '../assets/images/newtrain2.jpg';
import imgNewTrain3 from '../assets/images/newtrain3.jpg';
import imgNewBus from '../assets/images/newbus.jpg';
import imgNewBus2 from '../assets/images/newbus2.jpg';

const topRoutes = [
  { from: 'Mumbai', to: 'Pune', type: 'Train', image: imgNewTrain, price: '₹450', time: '3h 15m' },
  { from: 'Pune', to: 'Goa', type: 'Bus', image: imgNewBus, price: '₹1200', time: '10h 30m' },
  { from: 'Mumbai', to: 'Bangalore', type: 'Bus', image: imgNewBus2, price: '₹1500', time: '16h 00m' },
  { from: 'Delhi', to: 'Jaipur', type: 'Train', image: imgNewTrain2, price: '₹800', time: '4h 45m' },
];

export default function Home({ user }) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [transport, setTransport] = useState('Train');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!from || !to || !date) return;
    navigate('/bookings', { state: { from, to, date, transport } });
  };

  return (
    <div className="space-y-12 pb-12">
      {/* Ticker */}
      <div className="bg-charcoal text-vintageCyan py-2 overflow-hidden border-y-4 border-vintageCyan shadow-[0_4px_0_0_rgba(44,62,80,1)]">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="whitespace-nowrap font-retro font-bold text-lg"
        >
          *** NEW ROUTES ADDED: MUMBAI - PUNE EXP *** BOOK NOW FOR FESTIVE DISCOUNTS *** LATEST VOLVO BUSES AVAILABLE ***
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Hero Left - Search Box */}
        <div className="lg:col-span-5 relative">
          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 bg-fadedOrange text-white font-display font-bold px-3 py-1 border-2 border-charcoal transform -rotate-6 z-10">
            FAST & RELIABLE
          </div>
          <div className="absolute -bottom-4 -right-4 bg-tealCyan text-white font-display font-bold px-3 py-1 border-2 border-charcoal transform rotate-3 z-10">
            BOOK NOW!
          </div>

          <div className="card-retro bg-vintageCyan relative z-0">
            <h2 className="font-display text-4xl uppercase font-black mb-6 border-b-4 border-charcoal pb-2 flex items-center gap-3 text-white">
              <Train className="w-8 h-8" />
              Reservation
            </h2>
            
            <form onSubmit={handleSearch} className="space-y-5">
              <div className="flex gap-4 mb-4">
                <button 
                  type="button"
                  onClick={() => setTransport('Train')}
                  className={`flex-1 py-2 font-display font-bold border-2 border-charcoal flex justify-center items-center gap-2 ${transport === 'Train' ? 'bg-charcoal text-white shadow-none' : 'bg-white shadow-[4px_4px_0px_0px_rgba(44,62,80,1)]'}`}
                >
                  <Train className="w-5 h-5"/> TRAIN
                </button>
                <button 
                  type="button"
                  onClick={() => setTransport('Bus')}
                  className={`flex-1 py-2 font-display font-bold border-2 border-charcoal flex justify-center items-center gap-2 ${transport === 'Bus' ? 'bg-charcoal text-white shadow-none' : 'bg-white shadow-[4px_4px_0px_0px_rgba(44,62,80,1)]'}`}
                >
                  <Bus className="w-5 h-5"/> BUS
                </button>
              </div>

              <div className="space-y-2">
                <label className="font-retro font-bold text-sm text-white">FROM STATION/STOP</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-charcoal/50" />
                  <input 
                    type="text" 
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="w-full border-2 border-charcoal p-2 pl-10 font-bold focus:outline-none focus:ring-2 focus:ring-deepRed"
                    placeholder="E.g. Mumbai"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-retro font-bold text-sm text-white">TO STATION/STOP</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-charcoal/50" />
                  <input 
                    type="text" 
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className="w-full border-2 border-charcoal p-2 pl-10 font-bold focus:outline-none focus:ring-2 focus:ring-deepRed"
                    placeholder="E.g. Pune"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-retro font-bold text-sm text-white">DATE OF JOURNEY</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-charcoal/50" />
                  <input 
                    type="date" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full border-2 border-charcoal p-2 pl-10 font-bold focus:outline-none focus:ring-2 focus:ring-deepRed"
                  />
                </div>
              </div>

              <button type="submit" className="w-full btn-retro bg-deepRed text-white mt-6 flex justify-center items-center gap-2 text-xl">
                SEARCH ROUTES <ArrowRight className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>

        {/* Hero Right - Posters */}
        <div className="lg:col-span-7 flex flex-col justify-center relative">
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              whileHover={{ rotate: -2, scale: 1.05 }}
              className="card-retro p-2 bg-white transform rotate-2 relative z-10 rounded-lg overflow-hidden"
            >
              <div className="overflow-hidden rounded-md border-2 border-charcoal">
                <img src={imgNewTrain3} alt="Train Journey" className="w-full h-[240px] object-cover object-[center_60%] hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-3 bg-charcoal text-white mt-2 font-display text-center rounded-sm">
                <div className="text-sm text-vintageCyan">EXPERIENCE</div>
                <div className="text-xl font-bold">INDIAN RAILWAYS</div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ rotate: 2, scale: 1.05 }}
              className="card-retro p-2 bg-cream transform -rotate-3 mt-8 relative z-20 rounded-lg overflow-hidden"
            >
              <div className="overflow-hidden rounded-md border-2 border-charcoal">
                <img src={imgNewBus} alt="Bus Journey" className="w-full h-[240px] object-cover object-[center_75%] hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-3 bg-fadedOrange text-white mt-2 font-display text-center rounded-sm">
                <div className="text-sm text-charcoal">PREMIUM</div>
                <div className="text-xl font-bold">VOLVO SERVICE</div>
              </div>
            </motion.div>
          </div>

          {/* Stats Badges */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-30 w-full justify-center">
            <div className="bg-white border-2 border-charcoal px-4 py-2 shadow-[4px_4px_0px_0px_rgba(44,62,80,1)] flex flex-col items-center">
              <span className="font-display font-black text-2xl text-deepRed">5M+</span>
              <span className="font-retro text-xs font-bold">PASSENGERS</span>
            </div>
            <div className="bg-white border-2 border-charcoal px-4 py-2 shadow-[4px_4px_0px_0px_rgba(44,62,80,1)] flex flex-col items-center">
              <span className="font-display font-black text-2xl text-tealCyan">500+</span>
              <span className="font-retro text-xs font-bold">ROUTES</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Routes Section */}
      <div className="mt-24 pt-8 border-t-4 border-charcoal border-dashed relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-charcoal text-vintageCyan font-display font-bold text-2xl px-6 py-2 border-4 border-white shadow-[0_4px_0_0_rgba(255,255,255,1)]">
          POPULAR JOURNEYS
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {topRoutes.map((route, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="card-retro p-0 overflow-hidden flex flex-col h-full bg-white group cursor-pointer rounded-lg border-4"
            >
              <div className="relative h-[240px] border-b-4 border-charcoal overflow-hidden">
                <img 
                  src={route.image} 
                  alt={route.to} 
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out ${route.type === 'Bus' ? 'object-[center_75%]' : 'object-[center_60%]'}`} 
                />
                <div className="absolute top-3 left-3 bg-vintageCyan text-white font-bold font-display px-3 py-1 border-2 border-charcoal text-sm shadow-[2px_2px_0px_0px_rgba(44,62,80,1)] rounded-sm z-10">
                  {route.type}
                </div>
                <div className="absolute bottom-3 right-3 bg-white font-bold font-retro px-3 py-1 border-2 border-charcoal text-sm shadow-[2px_2px_0px_0px_rgba(44,62,80,1)] rounded-sm z-10">
                  {route.time}
                </div>
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-display font-bold text-xl">{route.from}</span>
                    <ArrowRight className="w-5 h-5 text-deepRed" />
                    <span className="font-display font-bold text-xl">{route.to}</span>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center border-t-2 border-charcoal border-dashed pt-4">
                  <span className="font-display text-2xl font-black text-tealCyan">{route.price}</span>
                  <button className="bg-charcoal text-white font-bold text-sm px-4 py-2 hover:bg-deepRed transition-colors">BOOK</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
