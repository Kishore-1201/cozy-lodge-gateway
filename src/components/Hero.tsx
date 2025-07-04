
import React from 'react';
import { Calendar, Users, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-yellow-400 fill-current" size={20} />
          ))}
          <span className="ml-2 text-lg">Luxury Mountain Retreat</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Welcome to <br />
          <span className="text-amber-400">Cozy Lodge</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Escape to tranquility in our luxurious lodge nestled in the heart of pristine mountains. 
          Experience comfort, elegance, and unforgettable memories.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Book Your Stay
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
            Explore Rooms
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <Calendar className="text-amber-400" size={24} />
            <div>
              <p className="font-semibold">Easy Booking</p>
              <p className="text-sm text-gray-300">Reserve online instantly</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <Users className="text-amber-400" size={24} />
            <div>
              <p className="font-semibold">Family Friendly</p>
              <p className="text-sm text-gray-300">Perfect for all ages</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <Star className="text-amber-400" size={24} />
            <div>
              <p className="font-semibold">5-Star Service</p>
              <p className="text-sm text-gray-300">Exceptional hospitality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
