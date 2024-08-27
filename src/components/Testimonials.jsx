/* eslint-disable max-len */
import React from 'react';
import '../styles/testimonials.css';
import ProfileCard from './ProfileCard';

export default function Testimonials() {
  const testimonials = [
    {
      words: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cumque ipsum, adipisci, aliquid nostrum rerum facere eveniet eum doloremque omnis corrupti laboriosam. Eius,aliquid ratione.',
      name: 'Harry Potter',
      location: 'Copenhagen',
    },
    {
      words: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cumque ipsum, adipisci, aliquid nostrum rerum facere eveniet eum doloremque omnis corrupti laboriosam. Eius,aliquid ratione.',
      name: 'Ron Wisely',
      location: 'Roskiled',
    },
  ];
  return (
    <div className="testimonials">
      <div className="topSection">
        <p>Reviewed by People</p>
        <h1>Client&apos;s Testimonials</h1>
        <p>
          Discover the positive impact we&apos;ve made on the our client&apos;s
          through their testimonials. Our client&apos;s have experienced our
          services and results and they&apos;re eager to share their positive
          experiences with you.
        </p>
      </div>

      <div className="bottomSection">
        {testimonials && testimonials.map((t) => <ProfileCard name={t.name} location={t.location} words={t.words} />)}
      </div>
    </div>
  );
}
