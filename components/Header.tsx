
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Destinations', href: '#' },
    { name: 'Packages', href: '#' },
    { name: 'Honeymoon Tours', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <header
      className={`fixed top-0 md:top-8 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 py-2 shadow-lg' : 'bg-transparent py-4'
        }`}
      style={{ top: isScrolled ? '0' : undefined }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center group cursor-pointer">
          <div className="relative">
            <i className="fas fa-mountain text-4xl text-green-500 mr-2 drop-shadow-md"></i>
            <i className="fas fa-mountain text-2xl text-blue-400 absolute bottom-0 right-1 opacity-80"></i>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-white font-extrabold text-xl tracking-tighter">
              Pakistan<span className="font-light ml-1 text-gray-300">Travel Places</span>
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8 ml-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white font-normal text-xs uppercase tracking-wide transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-400 hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}

          {/* Search Icon */}
          <button className="text-white ml-2">
            <i className="fas fa-search text-base"></i>
          </button>
        </nav>



        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-black/95 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen py-6' : 'max-h-0'}`}>
        <nav className="flex flex-col items-center space-y-4 px-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-lg font-medium hover:text-blue-400 transition-colors w-full text-center py-2 border-b border-white/10 last:border-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
