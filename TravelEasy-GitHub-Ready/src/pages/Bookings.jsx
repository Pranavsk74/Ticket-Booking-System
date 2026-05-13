import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Ticket, Clock, MapPin, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Bookings({ user }) {
  const location = useLocation();
  const navigate = useNavigate();
  const searchState = location.state || {};
  
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    const savedBookings = JSON.parse(localStorage.getItem('bookings_' + user.email) || '[]');
    setBookings(savedBookings);
  }, [user, navigate]);

  const handleBook = () => {
    if (!searchState.from || !searchState.to) return;
    
    setLoading(true);
    setTimeout(() => {
      const newBooking = {
        id: Math.random().toString(36).substr(2, 9),
        from: searchState.from,
        to: searchState.to,
        date: searchState.date,
        transport: searchState.transport,
        status: 'CONFIRMED',
        price: searchState.transport === 'Train' ? '₹850' : '₹1200'
      };
      
      const updatedBookings = [newBooking, ...bookings];
      localStorage.setItem('bookings_' + user.email, JSON.stringify(updatedBookings));
      setBookings(updatedBookings);
      setLoading(false);
      setSuccess(true);
      
      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="flex items-center justify-between mb-8 border-b-4 border-charcoal pb-4">
        <h1 className="font-display text-4xl font-black uppercase flex items-center gap-3">
          <Ticket className="w-10 h-10 text-deepRed" />
          My Tickets
        </h1>
        <div className="font-retro bg-charcoal text-vintageCyan px-4 py-2 font-bold text-sm">
          USER: {user?.name?.toUpperCase()}
        </div>
      </div>

      {searchState.from && searchState.to && !success && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="card-retro bg-fadedOrange border-4">
            <h2 className="font-display text-2xl font-bold text-white mb-4 uppercase">Pending Reservation</h2>
            <div className="bg-white border-2 border-charcoal p-4 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="text-xs font-bold text-charcoal/60 mb-1 font-retro">FROM</div>
                  <div className="font-display font-bold text-xl">{searchState.from}</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-charcoal/60 mb-1 font-retro">TO</div>
                  <div className="font-display font-bold text-xl">{searchState.to}</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-charcoal/60 mb-1 font-retro">DATE</div>
                  <div className="font-bold">{searchState.date}</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-charcoal/60 mb-1 font-retro">CLASS</div>
                  <div className="font-bold">{searchState.transport}</div>
                </div>
              </div>
              <button 
                onClick={handleBook}
                disabled={loading}
                className="btn-retro bg-tealCyan text-white whitespace-nowrap disabled:opacity-50"
              >
                {loading ? 'PROCESSING...' : 'CONFIRM TICKET'}
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {success && (
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mb-12 bg-tealCyan border-4 border-charcoal p-6 text-white text-center shadow-[6px_6px_0px_0px_rgba(44,62,80,1)]"
        >
          <CheckCircle2 className="w-16 h-16 mx-auto mb-2" />
          <h2 className="font-display text-3xl font-black">BOOKING SUCCESSFUL!</h2>
          <p className="font-retro mt-2">Your ticket has been added to the register.</p>
        </motion.div>
      )}

      <div>
        <h3 className="font-display text-2xl font-bold mb-6 bg-charcoal text-white inline-block px-4 py-1">TICKET HISTORY</h3>
        
        {bookings.length === 0 ? (
          <div className="text-center py-12 border-4 border-dashed border-charcoal/30">
            <AlertCircle className="w-12 h-12 mx-auto text-charcoal/30 mb-2" />
            <p className="font-retro font-bold text-charcoal/50">NO TICKETS FOUND IN LEDGER</p>
          </div>
        ) : (
          <div className="space-y-6">
            {bookings.map((booking) => (
              <div key={booking.id} className="relative bg-white border-2 border-charcoal flex flex-col md:flex-row shadow-[4px_4px_0px_0px_rgba(44,62,80,1)]">
                {/* Stub */}
                <div className="bg-mustardYellow w-full md:w-32 border-b-2 md:border-b-0 md:border-r-2 border-charcoal border-dashed p-4 flex flex-col justify-center items-center">
                  <div className="font-retro text-xs font-bold transform md:-rotate-90 md:mb-4 whitespace-nowrap">TICKET NO.</div>
                  <div className="font-display font-black text-xl md:mt-8">{booking.id}</div>
                </div>
                
                {/* Details */}
                <div className="p-6 flex-1 grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <div className="font-retro text-xs text-charcoal/60 mb-1 font-bold">DEPARTURE</div>
                    <div className="font-display text-2xl font-bold truncate">{booking.from}</div>
                  </div>
                  <div>
                    <div className="font-retro text-xs text-charcoal/60 mb-1 font-bold">ARRIVAL</div>
                    <div className="font-display text-2xl font-bold truncate">{booking.to}</div>
                  </div>
                  <div>
                    <div className="font-retro text-xs text-charcoal/60 mb-1 font-bold">DATE</div>
                    <div className="font-bold flex items-center gap-1"><Clock className="w-4 h-4"/>{booking.date}</div>
                  </div>
                  <div>
                    <div className="font-retro text-xs text-charcoal/60 mb-1 font-bold">STATUS</div>
                    <div className="font-display font-bold text-tealCyan text-xl">{booking.status}</div>
                  </div>
                </div>

                <div className="bg-cream border-t-2 md:border-t-0 md:border-l-2 border-charcoal p-4 flex flex-row md:flex-col justify-between items-center w-full md:w-32">
                   <div className="font-retro text-xs font-bold text-charcoal/60">FARE</div>
                   <div className="font-display font-black text-2xl">{booking.price}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
