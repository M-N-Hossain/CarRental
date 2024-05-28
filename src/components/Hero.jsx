/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import '../styles/hero.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { motion } from 'framer-motion';
import fadeIn from '../utils/variants';

export default function Hero() {
  return (
    <div className="hero">
      <motion.div
        variants={fadeIn('left', 0.1)}
        initial="hidden"
        whileInView="show"
        className="innerContainer"
      />
      <motion.div
        variants={fadeIn('right', 0.1)}
        initial="hidden"
        whileInView="show"
        className="heroContent"
      >
        <p className="firstP-Text">Plan your trip now</p>
        <h1>
          Save
          <span> big </span>
          with our car rental
        </h1>
        <p className="secondP-Text">
          Rent the car of your dreams. Unbeatable prices, unlimited miles,
          flexible pick up options and much more
        </p>
        <button type="button" style={{ marginLeft: 0 }}>
          Book Ride
          <CheckCircleOutlineIcon className="icon" />
        </button>
        <button className="learnMoreBtn" type="button">Learn more &gt;</button>
      </motion.div>
    </div>
  );
}
