/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import '../styles/vehicle.css';

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
            {car.name}
          </button>
        ))}
      </div>
      <div className="vehiclePicture">
        <img src={selectedCar.image} alt={selectedCar.name} />
      </div>
      <div className="vehicleDetails">
        <p>
          <strong>Name:</strong>
          {selectedCar.name}
        </p>
        <p>
          <strong>Year:</strong>
          {selectedCar.year}
        </p>
        <p>
          <strong>Price:</strong>
          {selectedCar.price}
        </p>
        <p>
          <strong>Color:</strong>
          {selectedCar.color}
        </p>
      </div>
    </div>
  );
}
