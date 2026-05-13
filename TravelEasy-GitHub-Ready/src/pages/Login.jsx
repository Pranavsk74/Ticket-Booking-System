import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Login({ setUser }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) return;
    if (!isLogin && !formData.name) return;

    // Simple localStorage mock auth
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (isLogin) {
      const user = users.find(u => u.email === formData.email && u.password === formData.password);
      if (user) {
        sessionStorage.setItem('user', JSON.stringify(user));
        setUser(user);
        navigate('/');
      } else {
        alert('Invalid credentials. Please try again or create an account.');
      }
    } else {
      const exists = users.find(u => u.email === formData.email);
      if (exists) {
        alert('User already exists. Please login.');
      } else {
        const newUser = { name: formData.name, email: formData.email, password: formData.password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        sessionStorage.setItem('user', JSON.stringify(newUser));
        setUser(newUser);
        navigate('/');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto py-12">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="card-retro bg-white relative p-8"
      >
        <div className="absolute -top-4 -left-4 bg-deepRed text-white font-display font-bold px-4 py-2 border-2 border-charcoal transform -rotate-3 z-10 shadow-[4px_4px_0px_0px_rgba(44,62,80,1)]">
          {isLogin ? 'PASSENGER LOGIN' : 'NEW REGISTRATION'}
        </div>

        <div className="text-center mb-8 mt-4">
          <User className="w-16 h-16 mx-auto text-charcoal mb-4 bg-vintageCyan rounded-full p-3 border-2 border-charcoal" />
          <h2 className="font-display text-2xl font-black uppercase text-charcoal">
            {isLogin ? 'Access Your Account' : 'Join TravelEasy'}
          </h2>
          <p className="font-retro text-sm text-charcoal/60 mt-2 font-bold">
            {isLogin ? 'ENTER YOUR CREDENTIALS BELOW' : 'FILL IN YOUR DETAILS'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div className="space-y-2">
              <label className="font-retro font-bold text-sm">FULL NAME</label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-charcoal/50" />
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full border-2 border-charcoal p-2 pl-10 font-bold focus:outline-none focus:ring-2 focus:ring-deepRed"
                  required={!isLogin}
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <label className="font-retro font-bold text-sm">EMAIL ADDRESS</label>
            <div className="relative">
              <User className="absolute left-3 top-3 w-5 h-5 text-charcoal/50" />
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full border-2 border-charcoal p-2 pl-10 font-bold focus:outline-none focus:ring-2 focus:ring-deepRed"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-retro font-bold text-sm">PASSWORD</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-charcoal/50" />
              <input 
                type="password" 
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full border-2 border-charcoal p-2 pl-10 font-bold focus:outline-none focus:ring-2 focus:ring-deepRed"
                required
              />
            </div>
          </div>

          <button type="submit" className="w-full btn-retro bg-charcoal text-white mt-6 flex justify-center items-center gap-2">
            {isLogin ? 'LOGIN SECURELY' : 'CREATE ACCOUNT'} <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="mt-6 text-center border-t-2 border-charcoal border-dashed pt-4">
          <p className="font-retro text-sm font-bold">
            {isLogin ? "DON'T HAVE AN ACCOUNT?" : "ALREADY REGISTERED?"}
          </p>
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="mt-2 font-display font-bold text-deepRed hover:underline uppercase"
          >
            {isLogin ? 'Register Here' : 'Login Instead'}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
