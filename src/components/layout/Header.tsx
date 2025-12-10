'use client'; 

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; 
import { NAV_LINKS } from '@/lib/constants'; 


export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
  
    <header className="sticky px-5 py-4 font-mono  top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm">
      <div className="container">
        <div className="flex w-full items-center justify-between">
          
        
          <Link href="/" className="text-2xl font-extrabold text-black tracking-wider hover:opacity-80 transition-opacity">
            SideDrive
          </Link>

          
          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          
          <div className="hidden md:block">
            
            <Link 
              href="/contact" 
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Book Now
            </Link>
          </div>

          
          <button
            className="md:hidden p-2 text-gray-700 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white shadow-lg">
          <nav className="flex flex-col space-y-1 p-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-base font-medium text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)} 
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link 
                href="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-4 py-2 bg-blue-600 text-white text-base font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};