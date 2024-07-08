import React from 'react';
import '../styles/vehicleModels.css';
import Vehicle from './Vehicle';
import x5 from '../assets/x5.png';
import tesla from '../assets/tesla.png';
import mustang from '../assets/mustang.png';
import camaro from '../assets/camaro.png';
import civic from '../assets/civic.png';
import a4 from '../assets/a4.png';
import corolla from '../assets/corolla.png';

export default function VehicleModels() {
  const cars = [
    {
      pricePerDay: '$45',
      model: 'Mustang',
      mark: 'Ford',
      year: 2021,
      doors: '2',
      ac: 'Yes',
      transmission: 'Manual',
      fuel: 'Disel',
      image: mustang,
    },
    {
      pricePerDay: '$50',
      model: 'Tesla Model S',
      mark: 'Tesla',
      year: 2020,
      doors: '4',
      ac: 'Yes',
      transmission: 'Auto',
      fuel: 'Disel',
      image: tesla,
    },

    {
      pricePerDay: '$40',
      model: 'Civic',
      mark: 'Honda',
      year: 2018,
      doors: '4',
      ac: 'Yes',
      transmission: 'Manual',
      fuel: 'Disel',
      image: civic,
    },
    {
      pricePerDay: '$35',
      model: 'Corolla',
      mark: 'Toyota',
      year: 2017,
      doors: '4',
      ac: 'Yes',
      transmission: 'Manual',
      fuel: 'Disel',
      image: corolla,
    },

    {
      pricePerDay: '$70',
      model: 'X5',
      mark: 'BMW',
      year: 2022,
      doors: '4',
      ac: 'Yes',
      transmission: 'Manual',
      fuel: 'Disel',
      image: x5,
    },

    {
      pricePerDay: '$55',
      model: 'Camaro',
      mark: 'Chevrolet',
      year: 2019,
      doors: '2',
      ac: 'Yes',
      transmission: 'Manual',
      fuel: 'Disel',
      image: camaro,
    },

    {
      pricePerDay: '$60',
      model: 'A4',
      mark: 'Audi',
      year: 2021,
      doors: '4',
      ac: 'Yes',
      transmission: 'Auto',
      fuel: 'Yes',
      image: a4,
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
