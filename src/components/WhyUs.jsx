/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import '../styles/whyUs.css';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import ConnectWithoutContactTwoToneIcon from '@mui/icons-material/ConnectWithoutContactTwoTone';
import Card from './Card';

export default function WhyUs() {
  return (
    <div className="whyUsOuterContainer">
      <div className="imgDiv">
        <img src="src/assets/cars.png" alt="" />
      </div>
      <div className="whyUsInnerContainer">
        <div className="rightbar">
          <p>Why choose us</p>
          <h1>Best valued deals you will ever find</h1>
          <p>
            Discaver the best deals you'll ever find with our unbeatable offers
            We're dedicated to providing you with the bast value for your money,
            so you can enjoy top-quality sarvices and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so danil miss out on your chance to save big
          </p>
          <button type="button">Find Details &gt;</button>
        </div>
        <div className="leftbar">
          <Card
            clssname="subCard"
            icon={<ConnectWithoutContactTwoToneIcon className="icon" />}
            title="Cross Country Drive"
            desc="Take your driving experience to the next level
            with our top-notch vehicles for your cross-country adventures."
          />
          <Card
            clssname="subCard"
            icon={<MonetizationOnIcon className="icon" />}
            title="All Inclusive Pricing"
            desc="Get everything you need in one convenient
            transparent price with our all-inciusive pricing policy."
          />
          <Card
            clssname="subCard"
            icon={<PriceChangeIcon className="icon" />}
            title="No Hidden Charges"
            desc="Enjoy peece of mind with our no hidden
            charges policy. We balieve in transparent and honest pricing"
          />
        </div>
      </div>
    </div>
  );
}
