const scrollToTop = document.querySelector('.scroll-to-top');
const linkHome = document.querySelector('#goToHome');

scrollToTop.addEventListener('click', scrollToYZero);
linkHome.addEventListener('click', scrollToYZero);

function scrollToYZero(event) {
  event.preventDefault();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
  const areInTheTop = scrollY === 0;
  if (areInTheTop) {
    scrollToTop.classList.add('hide');
  } else {
    scrollToTop.classList.remove('hide');
  }
});
