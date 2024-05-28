/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import '../styles/booking.css';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EventIcon from '@mui/icons-material/Event';
import Alert from '@mui/material/Alert';
import { SelectInput, DateInput } from './CustomInput';

export default function Booking() {
  const [carType, setCarType] = useState('');
  const [pickUpLocation, setPickUpLocation] = useState('');
  const [dropOffLocation, setDropOffLocation] = useState('');
  const [pickUpDate, setPickUpDate] = useState('');
  const [dropOffDate, setDropOffDate] = useState('');
  const [isBookingDone, setIsBookingDone] = useState(false);
  const [bookingInfo, setBookingInfo] = useState({});

  // creating custom error for sequential error message
  const [showWarnings, setShowWarnings] = useState({
    carType: false,
    pickUpLocation: false,
    dropOffLocation: false,
    pickUpDate: false,
    dropOffDate: false,
  });

  const carTypes = [
    'Select your car type', 'Economy cars', 'Compact cars', 'Mid-size cars', 'SUVs',
  ];

  const locations = ['Select pick-up location', 'Copenhagen-Central', 'Roskild', 'Farum', 'Norreport', 'Norrebro'];

  const handleSubmit = (event) => {
    event.preventDefault();

    const validations = [
      { field: 'carType', value: carType, message: carType === 'Select your car type' || !carType },
      { field: 'pickUpLocation', value: pickUpLocation, message: pickUpLocation === 'Select pick-up location' || !pickUpLocation },
      { field: 'dropOffLocation', value: dropOffLocation, message: dropOffLocation === 'Select drop-off location' || !dropOffLocation },
      { field: 'pickUpDate', value: pickUpDate, message: !pickUpDate },
      { field: 'dropOffDate', value: dropOffDate, message: !dropOffDate },
    ];

    // find out the error as the user have to choose something else other than the default value
    // eslint-disable-next-line no-restricted-syntax
    for (const validation of validations) {
      if (validation.message) {
        setShowWarnings({
          carType: validation.field === 'carType',
          pickUpLocation: validation.field === 'pickUpLocation',
          dropOffLocation: validation.field === 'dropOffLocation',
          pickUpDate: validation.field === 'pickUpDate',
          dropOffDate: validation.field === 'dropOffDate',
        });
        return;
      }
    }

    // submission logic
    setIsBookingDone(true);

    setBookingInfo({
      carType,
      pickUpLocation,
      dropOffLocation,
      pickUpDate,
      dropOffDate,
    });

    console.log('Form submitted with:', {
      carType, pickUpLocation, dropOffLocation, pickUpDate, dropOffDate,
    });

    // set the state back to default
    setCarType('');
    setPickUpLocation('');
    setDropOffLocation('');
    setPickUpDate('');
    setDropOffDate('');
  };

  // Higher order function
  const handleSelectInputChange = (setter, field) => (event) => {
    const { value } = event.target;
    setter(value);
    if (value !== 'Select your car type' && value !== 'Select pick-up location' && value !== 'Select drop-off location' && value !== '') {
      setShowWarnings((prevWarnings) => ({
        ...prevWarnings,
        [field]: false,
      }));
    }
  };

  return (
    <div className="booking">
      <h2>Book a car</h2>
      <form className="innerContainer" onSubmit={handleSubmit}>
        <SelectInput
          title="Select your car type"
          icon={<DirectionsCarIcon className="icon" />}
          options={carTypes}
          value={carType}
          onChange={handleSelectInputChange(setCarType, 'carType')}
          showWarning={showWarnings.carType}
          warningMessage="Please select a valid car type."
        />

        <SelectInput
          title="Pick-Up"
          icon={<FmdGoodIcon className="icon" />}
          options={['Select pick-up location', ...locations]}
          value={pickUpLocation}
          onChange={handleSelectInputChange(setPickUpLocation, 'pickUpLocation')}
          showWarning={showWarnings.pickUpLocation}
          warningMessage="Please select a valid pick-up location."
        />

        <SelectInput
          title="Drop-Off"
          icon={<FmdGoodIcon className="icon" />}
          options={['Select drop-off location', ...locations]}
          value={dropOffLocation}
          onChange={handleSelectInputChange(setDropOffLocation, 'dropOffLocation')}
          showWarning={showWarnings.dropOffLocation}
          warningMessage="Please select a valid drop-off location."
        />

        <DateInput
          title="Pick-Up-Date"
          icon={<EventIcon className="icon" />}
          value={pickUpDate}
          onChange={handleSelectInputChange(setPickUpDate, 'pickUpDate')}
          showWarning={showWarnings.pickUpDate}
          warningMessage="Please select a valid pick-up date."
        />

        <DateInput
          title="Drop-Off-Date"
          icon={<EventIcon className="icon" />}
          value={dropOffDate}
          onChange={handleSelectInputChange(setDropOffDate, 'dropOffDate')}
          showWarning={showWarnings.dropOffDate}
          warningMessage="Please select a valid drop-off date."
        />
        <button type="submit">Search</button>
      </form>
      {isBookingDone && (
      <Alert severity="success">
        {` Form submitted with: Car Type: ${bookingInfo.carType}, Pick up location:
        ${bookingInfo.pickUpLocation}, Pick up date:
        ${bookingInfo.pickUpDate}, Drop off location:
        ${bookingInfo.dropOffLocation}, Drop off date:
        ${bookingInfo.dropOffDate}`}
      </Alert>
      )}
    </div>
  );
}
