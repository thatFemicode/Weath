import { gsap, Power1 } from 'gsap';
function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}
// How much the icons 'bounce' up and down
const BOUNCE_HEIGHT = 25;
// Time to move from highest to lowest bounce point (s)
const BOUNCE_TIME = 4;
export const bounce = (target) => {
  let bounce = gsap.timeline({ repeat: -1, yoyo: true });
  bounce.to(target, {
    duration: BOUNCE_TIME,
    y: -BOUNCE_HEIGHT,
    ease: Power1.easeInOut,
  });
  bounce.timeScale(randomBetween(0.7, 1.3));
  return bounce;
};
