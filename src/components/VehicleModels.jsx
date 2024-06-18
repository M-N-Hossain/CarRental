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
      name: 'Teslaa Model S',
      year: 2020,
      price: '$69,420',
      color: 'Red',
      image: car1,
    },
    {
      name: 'Forad Mustang',
      year: 2021,
      price: '$55,300',
      color: 'Blue',
      image: car2,
    },
    {
      name: 'Chevraolet Camaro',
      year: 2019,
      price: '$62,000',
      color: 'Yellow',
      image: car3,
    },
    {
      name: 'Tesla Model S',
      year: 2020,
      price: '$69,420',
      color: 'Red',
      image: car1,
    },
    {
      name: 'Ford Mustang',
      year: 2021,
      price: '$55,300',
      color: 'Blue',
      image: car4,
    },
    {
      name: 'Chevrolet Camaro',
      year: 2019,
      price: '$62,000',
      color: 'Yellow',
      image: car5,
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
