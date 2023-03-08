export function addLink(linkClass, destination) {
  const linkElement = document.querySelector(`.${linkClass}`);
  const destinationElement = document.querySelector(`${destination}`);
  const navigationHeight = 150;
  const destinationY = destinationElement.offsetTop - navigationHeight;

  linkElement.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: destinationY, behavior: 'smooth' });
  });
  console.log(linkElement, destinationY);
}
