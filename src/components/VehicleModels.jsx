import React from 'react';
import '../styles/vehicleModels.css';
import Vehicle from './Vehicle';
import car1 from '../assets/car1.png';
import car2 from '../assets/car2.png';
import car3 from '../assets/car3.png';
import car4 from '../assets/car4.png';
import car5 from '../assets/car5.png';

export default function VehicleModels() {
  const cars = [
    {
      pricePerDay: '$50',
      model: 'Tesla Model S',
      mark: 'Tesla',
      year: 2020,
      doors: '4',
      ac: 'Yes',
      transmission: 'Yes',
      fuel: 'Yes',
      image: car1,
    },

    {
      pricePerDay: '$45',
      model: 'Mustang',
      mark: 'Ford',
      year: 2021,
      doors: '2',
      ac: 'Yes',
      transmission: 'Yes',
      fuel: 'Yes',
      image: car2,
    },

    {
      pricePerDay: '$55',
      model: 'Camaro',
      mark: 'Chevrolet',
      year: 2019,
      doors: '4',
      ac: 'Yes',
      transmission: 'Yes',
      fuel: 'Yes',
      image: car3,
    },

    {
      pricePerDay: '$40',
      model: 'Civic',
      mark: 'Honda',
      year: 2018,
      doors: '4',
      ac: 'Yes',
      transmission: 'Yes',
      fuel: 'Yes',
      image: car4,
    },

    {
      pricePerDay: '$60',
      model: 'A4',
      mark: 'Audi',
      year: 2021,
      doors: '4',
      ac: 'Yes',
      transmission: 'Yes',
      fuel: 'Yes',
      image: car5,
    },

    {
      pricePerDay: '$70',
      model: 'X5',
      mark: 'BMW',
      year: 2022,
      doors: '4',
      ac: 'Yes',
      transmission: 'Yes',
      fuel: 'Yes',
      image: car2,
    },

    {
      pricePerDay: '$35',
      model: 'Corolla',
      mark: 'Toyota',
      year: 2017,
      doors: '4',
      ac: 'Yes',
      transmission: 'Yes',
      fuel: 'Yes',
      image: car3,
    },
  ];

  return (
    <div className="VehicleModels">
      <div className="titleDiv">
        <h3>Vehicle Models</h3>
        <h1>Our rental fleet</h1>
        <p>
          Choose from variety of our amazing vehicles to rent for
          your next adventure or business trip
        </p>
      </div>
      <div className="vehicleDiv">
        <Vehicle cars={cars} />
      </div>
    </div>
  );
}
