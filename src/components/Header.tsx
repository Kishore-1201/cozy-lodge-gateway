
import React from 'react';
import { Menu, Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">CL</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Cozy Lodge</h1>
              <p className="text-sm text-gray-600">Luxury Mountain Retreat</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Home</a>
            <a href="#rooms" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Rooms</a>
            <a href="#amenities" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Amenities</a>
            <a href="#booking" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Book Now</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Contact</a>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone size={16} />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Mail size={16} />
              <span className="text-sm">info@cozylodge.com</span>
            </div>
          </div>

          <button className="md:hidden p-2">
            <Menu className="text-gray-700" size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
