
import React from 'react';
import { Wifi, Car, Coffee, Utensils, Dumbbell, Waves, TreePine, Shield } from 'lucide-react';

const Amenities = () => {
  const amenities = [
    {
      icon: Wifi,
      title: "Free High-Speed WiFi",
      description: "Stay connected with complimentary high-speed internet throughout the property"
    },
    {
      icon: Car,
      title: "Free Parking",
      description: "Convenient on-site parking available for all guests at no additional charge"
    },
    {
      icon: Utensils,
      title: "Fine Dining Restaurant",
      description: "Savor gourmet cuisine featuring local ingredients and mountain-inspired dishes"
    },
    {
      icon: Coffee,
      title: "24/7 Room Service",
      description: "Enjoy delicious meals and beverages delivered to your room around the clock"
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description: "State-of-the-art fitness equipment with panoramic mountain views"
    },
    {
      icon: Waves,
      title: "Spa & Wellness",
      description: "Rejuvenate with our full-service spa featuring massages and wellness treatments"
    },
    {
      icon: TreePine,
      title: "Nature Activities",
      description: "Guided hiking tours, mountain biking, and outdoor adventure experiences"
    },
    {
      icon: Shield,
      title: "24/7 Concierge",
      description: "Dedicated staff available around the clock to assist with all your needs"
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            World-Class Amenities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience luxury and comfort with our carefully curated amenities designed 
            to make your stay unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <amenity.icon className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">{amenity.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{amenity.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Additional Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-600">
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Business Services</p>
                <ul className="space-y-1">
                  <li>Meeting Rooms</li>
                  <li>Business Center</li>
                  <li>Event Planning</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Family Services</p>
                <ul className="space-y-1">
                  <li>Kids Club</li>
                  <li>Babysitting</li>
                  <li>Family Activities</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Transportation</p>
                <ul className="space-y-1">
                  <li>Airport Shuttle</li>
                  <li>Car Rental</li>
                  <li>Local Tours</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Special Services</p>
                <ul className="space-y-1">
                  <li>Pet Friendly</li>
                  <li>Laundry Service</li>
                  <li>Gift Shop</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
