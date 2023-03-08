const body = document.body;
export const Menu = {
  toggle() {
    body.classList.toggle('menu-active');
  },
  hide() {
    body.classList.remove('menu-active');
  },
};
