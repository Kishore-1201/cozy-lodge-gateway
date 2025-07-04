
import React, { useState } from 'react';
import { Calendar, Users, Search } from 'lucide-react';

const BookingSection = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [roomType, setRoomType] = useState('standard');

  const handleBooking = () => {
    if (!checkIn || !checkOut) {
      alert('Please select check-in and check-out dates');
      return;
    }
    
    const bookingDetails = {
      checkIn,
      checkOut,
      guests,
      roomType
    };
    
    console.log('Booking Details:', bookingDetails);
    alert(`Booking request submitted!\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nGuests: ${guests}\nRoom: ${roomType}`);
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Book Your Perfect Stay
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select your dates and preferences to find the ideal room for your mountain retreat.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                <Calendar className="inline mr-2" size={16} />
                Check-in Date
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                <Calendar className="inline mr-2" size={16} />
                Check-out Date
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                min={checkIn || new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                <Users className="inline mr-2" size={16} />
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Room Type
              </label>
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="standard">Standard Room</option>
                <option value="deluxe">Deluxe Room</option>
                <option value="family">Family Suite</option>
                <option value="luxury">Luxury Suite</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleBooking}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
          >
            <Search size={20} />
            <span>Search Available Rooms</span>
          </button>

          <p className="text-center text-gray-600 mt-4 text-sm">
            * Best rates guaranteed • Free cancellation up to 24 hours before check-in
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-amber-600" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Flexible Booking</h3>
            <p className="text-gray-600 text-sm">
              Change or cancel your reservation up to 24 hours before check-in at no extra cost.
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-amber-600" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Best Rate Promise</h3>
            <p className="text-gray-600 text-sm">
              We guarantee the lowest rates when you book direct. Find a lower price? We'll match it.
            </p>
          </div>

          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-amber-600" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Instant Confirmation</h3>
            <p className="text-gray-600 text-sm">
              Receive immediate confirmation and detailed booking information via email.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
