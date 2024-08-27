/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '../styles/vehicle.css';
import TableBox from './TableBox';

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
            style={selectedCar.model !== car.model ? {
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
        <TableBox className="price" label={selectedCar.pricePerDay} separator="/ rent per day" value="" />
        <TableBox label="Model" separator="|" value={selectedCar.model} />
        <TableBox label="Mark" separator="|" value={selectedCar.mark} />
        <TableBox label="Year" separator="|" value={selectedCar.year} />
        <TableBox label="Doors" separator="|" value={selectedCar.doors} />
        <TableBox label="AC" separator="|" value={selectedCar.ac} />
        <TableBox label="Transmission" separator="|" value={selectedCar.transmission} />
        <TableBox label="Fuel" separator="|" value={selectedCar.fuel} />
        <button type="button">RESERVE NOW</button>
      </div>
    </div>
  );
}
