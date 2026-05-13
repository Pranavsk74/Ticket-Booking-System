import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, AlertTriangle } from 'lucide-react';
import imgNewTrain from '../assets/images/newtrain.jpg';

export default function Support() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simple persistence
    localStorage.setItem('lastSupportTicket', JSON.stringify({
      ...formData,
      date: new Date().toISOString()
    }));
    
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="bg-charcoal text-white p-4 mb-8 flex justify-between items-center border-4 border-deepRed shadow-[8px_8px_0px_0px_rgba(192,57,43,1)]">
        <h1 className="font-display text-4xl font-black uppercase flex items-center gap-3">
          <AlertTriangle className="w-8 h-8 text-vintageCyan" />
          Control Center
        </h1>
        <div className="font-retro bg-deepRed px-3 py-1 text-sm font-bold animate-pulse">
          SYSTEM ONLINE
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="card-retro bg-vintageCyan">
            <h2 className="font-display text-2xl font-bold border-b-2 border-charcoal pb-2 mb-4 uppercase text-white">Direct Lines</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white p-3 border-2 border-charcoal">
                <div className="bg-charcoal text-white p-2">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-retro text-xs font-bold text-charcoal/60">EMERGENCY HELP DESK</div>
                  <div className="font-display font-bold text-xl">9579773239</div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-3 border-2 border-charcoal">
                <div className="bg-charcoal text-white p-2">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-retro text-xs font-bold text-charcoal/60">TELEGRAM / POST</div>
                  <div className="font-display font-bold text-xl">srikrishnanpranav@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-3 border-2 border-charcoal">
                <div className="bg-charcoal text-white p-2">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-retro text-xs font-bold text-charcoal/60">CENTRAL STATION</div>
                  <div className="font-display font-bold text-lg">Plot 42, Transport Nagar, New Delhi</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-retro bg-white rounded-lg p-2">
            <div className="overflow-hidden rounded-md border-2 border-charcoal mb-4">
              <img src={imgNewTrain} alt="Railway Control" className="w-full h-[240px] object-cover object-[center_60%] hover:scale-105 transition-transform duration-700 ease-in-out" />
            </div>
            <p className="font-retro text-sm font-bold text-center py-2 bg-cream border-2 border-charcoal border-dashed">MAINTAINING SCHEDULES SINCE 1995</p>
          </div>
        </div>

        {/* Form */}
        <div className="card-retro bg-cream relative">
          <div className="absolute top-2 right-2 bg-charcoal text-white font-retro text-xs px-2 py-1">FORM NO. 402-B</div>
          <h2 className="font-display text-3xl font-black uppercase mb-6">File a Report</h2>
          
          {submitted ? (
            <div className="bg-tealCyan border-2 border-charcoal p-6 text-white text-center">
              <h3 className="font-display text-2xl font-bold mb-2">REPORT LOGGED</h3>
              <p className="font-retro text-sm">Our officers will review your submission shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="font-retro font-bold text-sm block">PASSENGER NAME</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full border-2 border-charcoal p-3 font-bold bg-white focus:outline-none focus:ring-2 focus:ring-deepRed"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="font-retro font-bold text-sm block">CONTACT EMAIL</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full border-2 border-charcoal p-3 font-bold bg-white focus:outline-none focus:ring-2 focus:ring-deepRed"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="font-retro font-bold text-sm block">ISSUE DESCRIPTION</label>
                <textarea 
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full border-2 border-charcoal p-3 font-bold bg-white focus:outline-none focus:ring-2 focus:ring-deepRed resize-none"
                  required
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-retro bg-charcoal text-white mt-4 flex justify-center items-center gap-2 hover:bg-vintageCyan transition-colors">
                <Send className="w-5 h-5" /> DISPATCH MESSAGE
              </button>
            </form>
          )}
        </div>
      </div>
      
      <div className="flex justify-center mt-8">
        <div className="bg-vintageCyan text-charcoal font-retro font-bold px-4 py-2 border-2 border-charcoal shadow-[4px_4px_0px_0px_rgba(44,62,80,1)]">
           <span className="text-xs uppercase tracking-widest opacity-80 mr-2">MAINTAINED &</span>
           MADE BY S PRANAV
        </div>
      </div>
    </div>
  );
}
