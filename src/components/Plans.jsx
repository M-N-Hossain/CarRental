import React from 'react';
import '../styles/plans.css';
import CarRentalIcon from '@mui/icons-material/CarRental';
import ConnectWithoutContactTwoToneIcon from '@mui/icons-material/ConnectWithoutContactTwoTone';
import Card from './Card';

export default function Plans() {
  return (
    <div className="plansOuterContainer">
      <h2>Plan you trip now</h2>
      <h1>Quick & easy car rental</h1>
      <div className="plansInnerContainer">
        <Card
          icon={<CarRentalIcon className="icon" />}
          title="Select Car"
          desc="We offer big range of vehicles for all your driving needs.
        We have the perfect car to meet your needs"
        />
        <Card
          icon={<ConnectWithoutContactTwoToneIcon className="icon" />}
          title="Contact Operator"
          desc="Our knowledgeable and friendly operators are always ready
          to help with any questions and concerns"
        />
        <Card
          icon={<CarRentalIcon className="icon" />}
          title="Select Car"
          desc="We offer big range of vehicles for all your driving needs.
        We have the perfect car to meet your needs"
        />
      </div>
    </div>
  );
}
