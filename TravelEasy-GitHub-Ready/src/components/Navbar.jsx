import React from 'react';
import { Link } from 'react-router-dom';
import { Ticket, Phone, Home as HomeIcon, User, LogOut } from 'lucide-react';

export default function Navbar({ user, onLogout }) {
  return (
    <nav className="bg-vintageCyan border-b-4 border-charcoal sticky top-0 z-50 shadow-[0_4px_0_0_rgba(44,62,80,1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 font-display text-2xl font-bold tracking-widest uppercase text-charcoal bg-white px-3 py-1 border-2 border-charcoal transform -rotate-2 hover:rotate-0 transition-transform">
              <Ticket className="w-6 h-6 text-deepRed" />
              TravelEasy
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="font-display font-bold px-3 py-2 hover:bg-charcoal hover:text-white transition-colors flex items-center gap-1 uppercase"><HomeIcon className="w-4 h-4"/> Home</Link>
            <Link to="/bookings" className="font-display font-bold px-3 py-2 hover:bg-charcoal hover:text-white transition-colors flex items-center gap-1 uppercase"><Ticket className="w-4 h-4"/> Bookings</Link>
            <Link to="/support" className="font-display font-bold px-3 py-2 hover:bg-charcoal hover:text-white transition-colors flex items-center gap-1 uppercase"><Phone className="w-4 h-4"/> Support</Link>
            
            {user ? (
              <div className="flex items-center gap-4 ml-4">
                <span className="font-bold bg-white px-2 py-1 border-2 border-charcoal font-retro text-sm">Hello, {user.name}</span>
                <button onClick={onLogout} className="btn-retro bg-deepRed text-white py-1 px-3 text-sm flex items-center gap-1">
                  <LogOut className="w-4 h-4" /> Exit
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn-retro bg-charcoal text-vintageCyan py-1 px-4 text-sm ml-4 flex items-center gap-1">
                <User className="w-4 h-4"/> Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
