import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loading from './pages/Loading';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import Support from './pages/Support';
import Login from './pages/Login';

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check session
    const sessionUser = sessionStorage.getItem('user');
    if (sessionUser) {
      setUser(JSON.parse(sessionUser));
    }

    // Loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    setUser(null);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen flex flex-col retro-grid-bg relative">
      <Navbar user={user} onLogout={handleLogout} />

      {/* Main Content */}
      <main className="flex-grow p-4 md:p-8 overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-7xl mx-auto h-full"
          >
            <Routes>
              <Route path="/" element={<Home user={user} />} />
              <Route path="/bookings" element={<Bookings user={user} />} />
              <Route path="/support" element={<Support />} />
              <Route path="/login" element={<Login setUser={setUser} />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
