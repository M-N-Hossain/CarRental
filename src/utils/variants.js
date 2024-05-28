/* eslint-disable no-nested-ternary */
const fadeIn = (direction, delay) => ({
  hidden: {
    y: direction === 'up' ? 50 : direction === 'down' ? -40 : 0,
    x: direction === 'left' ? 150 : direction === 'right' ? -150 : 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 1.2,
      delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});

export default fadeIn;
