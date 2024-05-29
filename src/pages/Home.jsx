import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Booking from '../components/Booking';
import Plans from '../components/Plans';

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Booking />
      <Plans />
    </div>
  );
}
