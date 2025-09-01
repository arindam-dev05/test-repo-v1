
// Animate the name
gsap.from(".name", {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

// Animate the summary with a slight delay
gsap.from(".summary", {
  y: 20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: "power2.out"
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".project-card", {
  scrollTrigger: ".project-card",
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.2
});
