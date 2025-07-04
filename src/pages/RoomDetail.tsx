
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RoomAvailability from '../components/RoomAvailability';
import { ArrowLeft, Bed, Users, Wifi, Coffee, Car, Utensils, Star, Calendar, CreditCard, Shield } from 'lucide-react';

const RoomDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Mock room data - in real app, this would be fetched based on ID
  const roomData = {
    1: {
      id: 1,
      name: "Standard Room",
      price: 149,
      images: [
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
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
      description: "Our Standard Rooms offer the perfect blend of comfort and affordability. Featuring a cozy queen bed, modern amenities, and breathtaking mountain views, these rooms are ideal for couples or solo travelers seeking a peaceful retreat.",
      fullDescription: "Step into comfort with our thoughtfully designed Standard Rooms. Each room features a luxurious queen bed with premium linens, ensuring a restful night's sleep after your mountain adventures. The large windows frame spectacular views of the surrounding peaks, creating a serene atmosphere that connects you with nature. Modern amenities include complimentary high-speed WiFi, a convenient coffee maker for your morning brew, and air conditioning for year-round comfort. The private bathroom is equipped with premium toiletries and plush towels. Whether you're here for a romantic getaway or a solo adventure, our Standard Rooms provide the perfect sanctuary to unwind and recharge."
    }
  };

  const room = roomData[parseInt(id!) as keyof typeof roomData];

  if (!room) {
    return <div>Room not found</div>;
  }

  const [selectedImage, setSelectedImage] = React.useState(0);

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate('/rooms')}
            className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium mb-6 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            Back to Rooms
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="relative mb-4">
                <img
                  src={room.images[selectedImage]}
                  alt={room.name}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-2 rounded-full font-bold text-lg">
                  ${room.price}<span className="text-sm">/night</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                {room.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${room.name} view ${index + 1}`}
                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedImage === index ? 'ring-2 ring-amber-600' : 'hover:opacity-80'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <h1 className="text-3xl font-bold text-gray-800">{room.name}</h1>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">{room.size} • Up to {room.capacity} Guests • {room.bedType}</p>
              
              <p className="text-gray-700 mb-8 leading-relaxed">{room.fullDescription}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {room.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-700">
                    <feature.icon size={20} className="text-amber-600" />
                    <span className="font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">Room Amenities</h3>
                <div className="grid grid-cols-2 gap-3">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <RoomAvailability roomType={room} />
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Book This Room</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <Calendar className="text-amber-600 mx-auto mb-3" size={32} />
                <h4 className="font-semibold text-gray-800 mb-2">Flexible Dates</h4>
                <p className="text-gray-600 text-sm">Free cancellation up to 24hrs before check-in</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <CreditCard className="text-amber-600 mx-auto mb-3" size={32} />
                <h4 className="font-semibold text-gray-800 mb-2">Secure Payment</h4>
                <p className="text-gray-600 text-sm">Your payment information is protected</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <Shield className="text-amber-600 mx-auto mb-3" size={32} />
                <h4 className="font-semibold text-gray-800 mb-2">Best Rate Guarantee</h4>
                <p className="text-gray-600 text-sm">Find a lower price? We'll match it</p>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book Now - ${room.price}/night
              </button>
              <p className="text-gray-600 mt-3 text-sm">
                * Taxes and fees not included • Best rates guaranteed
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default RoomDetail;
