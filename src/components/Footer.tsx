
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CL</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Cozy Lodge</h3>
                <p className="text-gray-400 text-sm">Luxury Mountain Retreat</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Experience the perfect blend of luxury and nature at our mountain lodge. 
              Create memories that will last a lifetime in our serene setting.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#rooms" className="text-gray-400 hover:text-amber-400 transition-colors">Rooms & Suites</a></li>
              <li><a href="#amenities" className="text-gray-400 hover:text-amber-400 transition-colors">Amenities</a></li>
              <li><a href="#booking" className="text-gray-400 hover:text-amber-400 transition-colors">Book Now</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Gallery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Spa & Wellness</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Fine Dining</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Adventure Tours</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Event Planning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Transportation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Concierge</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-amber-400 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-400">123 Mountain View Drive</p>
                  <p className="text-gray-400">Alpine Valley, CO 80424</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-amber-400 flex-shrink-0" size={16} />
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-amber-400 flex-shrink-0" size={16} />
                <p className="text-gray-400">info@cozylodge.com</p>
              </div>
            </div>
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Business Hours</h5>
              <p className="text-gray-400 text-sm">Front Desk: 24/7</p>
              <p className="text-gray-400 text-sm">Restaurant: 6 AM - 11 PM</p>
              <p className="text-gray-400 text-sm">Spa: 8 AM - 9 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Cozy Lodge. All rights reserved. | 
            <a href="#" className="text-amber-400 hover:text-amber-300 ml-1">Privacy Policy</a> | 
            <a href="#" className="text-amber-400 hover:text-amber-300 ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
