import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Booking from '../components/Booking';

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Booking />
    </div>
  );
}
