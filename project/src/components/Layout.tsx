import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useThemeStore } from '../store/themeStore';

const Layout: React.FC = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;