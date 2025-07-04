
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RoomAvailability from '../components/RoomAvailability';
import { Bed, Users, Wifi, Coffee, Car, Utensils, Star } from 'lucide-react';

const Rooms = () => {
  const navigate = useNavigate();

  const roomTypes = [
    {
      id: 1,
      name: "Standard Room",
      price: 149,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: 2,
      bedType: "Queen Bed",
      size: "320 sq ft",
      totalRooms: 5,
      amenities: ["Free WiFi", "Coffee Maker", "Private Bathroom", "Mountain View", "Air Conditioning", "Mini Fridge"],
      features: [
        { icon: Users, text: "2 Guests" },
        { icon: Bed, text: "Queen Bed" },
        { icon: Wifi, text: "Free WiFi" },
        { icon: Coffee, text: "Coffee Maker" }
      ],
      description: "Comfortable and cozy rooms perfect for couples or solo travelers. Enjoy stunning mountain views from your window."
    },
    {
      id: 2,
      name: "Deluxe Room",
      price: 229,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: 3,
      bedType: "King Bed + Sofa",
      size: "450 sq ft",
      totalRooms: 4,
      amenities: ["Free WiFi", "Mini Bar", "Balcony", "Room Service", "Smart TV", "Premium Bedding", "Work Desk"],
      features: [
        { icon: Users, text: "3 Guests" },
        { icon: Bed, text: "King Bed" },
        { icon: Utensils, text: "Mini Bar" },
        { icon: Wifi, text: "Premium WiFi" }
      ],
      description: "Spacious deluxe rooms with premium amenities and a private balcony overlooking the mountains."
    },
    {
      id: 3,
      name: "Family Suite",
      price: 349,
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: 6,
      bedType: "2 Queen Beds",
      size: "650 sq ft",
      totalRooms: 3,
      amenities: ["Separate Living Area", "Kitchenette", "Two Bathrooms", "Game Console", "Family Games", "Cribs Available"],
      features: [
        { icon: Users, text: "6 Guests" },
        { icon: Bed, text: "2 Queen Beds" },
        { icon: Coffee, text: "Kitchenette" },
        { icon: Car, text: "Free Parking" }
      ],
      description: "Perfect for families with separate living areas and kid-friendly amenities. Spacious and comfortable for everyone."
    },
    {
      id: 4,
      name: "Luxury Suite",
      price: 499,
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: 4,
      bedType: "King Bed + Pull-out",
      size: "800 sq ft",
      totalRooms: 2,
      amenities: ["Private Jacuzzi", "Fireplace", "Butler Service", "Premium Dining", "Spa Access", "Concierge Service"],
      features: [
        { icon: Users, text: "4 Guests" },
        { icon: Bed, text: "King Suite" },
        { icon: Coffee, text: "Butler Service" },
        { icon: Utensils, text: "Private Dining" }
      ],
      description: "Ultimate luxury experience with private jacuzzi, fireplace, and dedicated butler service for an unforgettable stay."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Rooms & Suites
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully designed rooms and suites, each offering unique amenities 
              and breathtaking views of the surrounding mountains.
            </p>
          </div>

          <div className="space-y-12">
            {roomTypes.map((room) => (
              <div key={room.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="relative">
                    <img 
                      src={room.image} 
                      alt={room.name} 
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-2 rounded-full font-bold text-lg">
                      ${room.price}<span className="text-sm">/night</span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-2xl font-bold text-gray-800">{room.name}</h3>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{room.size} • Up to {room.capacity} Guests • {room.bedType}</p>
                    
                    <p className="text-gray-700 mb-6">{room.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {room.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-gray-600">
                          <feature.icon size={18} className="text-amber-600" />
                          <span>{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <p className="font-semibold text-gray-700 mb-3">Amenities:</p>
                      <div className="flex flex-wrap gap-2">
                        {room.amenities.map((amenity, index) => (
                          <span key={index} className="text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    <RoomAvailability roomType={room} />

                    <div className="flex gap-4 mt-6">
                      <button
                        onClick={() => navigate(`/room/${room.id}`)}
                        className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
                      >
                        View Details
                      </button>
                      <button className="flex-1 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white py-3 rounded-lg font-semibold transition-all duration-300">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Rooms;
