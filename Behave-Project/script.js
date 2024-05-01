// what is stagger:
gsap.from("#nav h3", {
  y: -50,
  opacity: 0,
  delay: 0.4,
  duration: 0.8,
  stagger: 0.5,
});
var tl = gsap.timeline();
tl.from("#main h1", {
  x: -50,
  opacity: 0,
  duration: 2,
  stagger: 0.5,
});
tl.from("#img1", {
  x: 100,
  roatate: 45,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
});
tl.from("#img2", {
  x: -100,
  roatate: 45,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
});
tl.from("#img3", {
  y: 100,
  roatate: 45,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
});
