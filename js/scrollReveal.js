const scrollReveal = new ScrollReveal({
  origin: 'bottom',
  distance: '23px',
  duration: 600,
  reset: true,
});

export function addReveal(elements) {
  scrollReveal.reveal(elements, { interval: 150 });
}
