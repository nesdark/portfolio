const html = document.querySelector('html');
export const Menu = {
  toggle() {
    html.classList.toggle('menu-active');
  },
  hide() {
    html.classList.remove('menu-active');
  },
};
