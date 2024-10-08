import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Booking from '../components/Booking';
import Plans from '../components/Plans';
import Banner from '../components/Banner';
import VehicleModels from '../components/VehicleModels';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Booking />
      <Plans />
      <VehicleModels />
      <Banner />
      <WhyUs />
      <Testimonials />
    </div>
  );
}
