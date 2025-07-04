
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import RoomCategories from '../components/RoomCategories';
import BookingSection from '../components/BookingSection';
import Amenities from '../components/Amenities';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <RoomCategories />
      <BookingSection />
      <Amenities />
      <Footer />
    </div>
  );
};

export default Index;
