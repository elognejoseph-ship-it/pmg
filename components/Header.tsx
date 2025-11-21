import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Car } from 'lucide-react';
import { APP_NAME, NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 w-full bg-pmg-red text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Area */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="bg-white p-2 rounded-full text-pmg-red group-hover:bg-pmg-gold transition-colors duration-300">
            <Car size={28} />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-wider">{APP_NAME}</span>
            <span className="text-xs text-pmg-gold font-medium uppercase tracking-widest">Expert Carrossier</span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-semibold uppercase tracking-wide hover:text-pmg-gold transition-colors duration-300 ${
                  isActive ? 'text-pmg-gold border-b-2 border-pmg-gold pb-1' : 'text-gray-100'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="bg-pmg-gold text-pmg-red px-5 py-2 rounded font-bold hover:bg-white transition-colors duration-300"
          >
            Devis Gratuit
          </NavLink>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-pmg-gold focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-pmg-red border-t border-red-800 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col p-4 gap-4">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-lg font-medium border-l-4 pl-4 transition-all duration-200 ${
                  isActive
                    ? 'border-pmg-gold text-pmg-gold'
                    : 'border-transparent text-white hover:pl-6'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;