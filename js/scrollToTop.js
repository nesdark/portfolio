const scrollToTop = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  const areInTheTop = scrollY === 0;
  if (areInTheTop) {
    scrollToTop.classList.add('hide');
  } else {
    scrollToTop.classList.remove('hide');
  }
});
