
import React from 'react';
import { Bed, Users, Wifi, Coffee, Car, Utensils } from 'lucide-react';

const RoomCategories = () => {
  const rooms = [
    {
      id: 1,
      name: "Standard Room",
      price: "$149",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "2 Guests",
      bedType: "Queen Bed",
      size: "320 sq ft",
      amenities: ["Free WiFi", "Coffee Maker", "Private Bathroom", "Mountain View"],
      features: [
        { icon: Users, text: "2 Guests" },
        { icon: Bed, text: "Queen Bed" },
        { icon: Wifi, text: "Free WiFi" },
        { icon: Coffee, text: "Coffee Maker" }
      ]
    },
    {
      id: 2,
      name: "Deluxe Room",
      price: "$229",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "3 Guests",
      bedType: "King Bed + Sofa",
      size: "450 sq ft",
      amenities: ["Free WiFi", "Mini Bar", "Balcony", "Room Service", "Smart TV"],
      features: [
        { icon: Users, text: "3 Guests" },
        { icon: Bed, text: "King Bed" },
        { icon: Utensils, text: "Mini Bar" },
        { icon: Wifi, text: "Premium WiFi" }
      ]
    },
    {
      id: 3,
      name: "Family Suite",
      price: "$349",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "6 Guests",
      bedType: "2 Queen Beds",
      size: "650 sq ft",
      amenities: ["Separate Living Area", "Kitchenette", "Two Bathrooms", "Game Console"],
      features: [
        { icon: Users, text: "6 Guests" },
        { icon: Bed, text: "2 Queen Beds" },
        { icon: Coffee, text: "Kitchenette" },
        { icon: Car, text: "Free Parking" }
      ]
    },
    {
      id: 4,
      name: "Luxury Suite",
      price: "$499",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      capacity: "4 Guests",
      bedType: "King Bed + Pull-out",
      size: "800 sq ft",
      amenities: ["Private Jacuzzi", "Fireplace", "Butler Service", "Premium Dining", "Spa Access"],
      features: [
        { icon: Users, text: "4 Guests" },
        { icon: Bed, text: "King Suite" },
        { icon: Coffee, text: "Butler Service" },
        { icon: Utensils, text: "Private Dining" }
      ]
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Room Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From cozy standard rooms to luxurious suites, find the perfect accommodation 
            for your mountain getaway. Each room is thoughtfully designed for your comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full font-semibold">
                  {room.price}<span className="text-sm">/night</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4">{room.size} • {room.capacity}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {room.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <feature.icon size={16} className="text-amber-600" />
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Amenities:</p>
                  <div className="flex flex-wrap gap-1">
                    {room.amenities.slice(0, 3).map((amenity, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {amenity}
                      </span>
                    ))}
                    {room.amenities.length > 3 && (
                      <span className="text-xs text-amber-600 font-medium">
                        +{room.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomCategories;
