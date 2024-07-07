/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '../styles/vehicle.css';
import Box from './Box';

export default function Vehicle({ cars }) {
  const [selectedCar, setSelectedCar] = useState(cars[0]);
  // const [selected, setSelected] = useState(false);

  return (
    <div className="vehicle">

      <div className="listOfVehicle">
        {cars.map((car, index) => (
          <button
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            type="button"
            onClick={() => setSelectedCar(car)}
            style={selectedCar.name !== car.name ? {
              backgroundColor: 'white',
              color: 'black',
            } : {}}
          >
            {car.model}
          </button>
        ))}
      </div>

      <div className="vehiclePicture">
        <img src={selectedCar.image} alt={selectedCar.name} />
      </div>

      <div className="vehicleDetails">
        <Box className="price" label={selectedCar.pricePerDay} separator="/ rent per day" value="" />
        <Box label="Model" separator="|" value={selectedCar.model} />
        <Box label="Mark" separator="|" value={selectedCar.mark} />
        <Box label="Year" separator="|" value={selectedCar.year} />
        <Box label="Doors" separator="|" value="4" />
        <Box label="AC" separator="|" value="Yes" />
        <Box label="Transmission" separator="|" value="Manual" />
        <Box label="Fuel" separator="|" value="Diesel" />
        <button type="button">RESERVE NOW</button>
      </div>
    </div>
  );
}
