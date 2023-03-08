import { Menu } from './menu.js';
import { addProject } from './addProjects.js';
import './scrollToTop.js';

const technologiesList = {
  frontEnd: ['html', 'css', 'js', 'github'],
};

addProject('Pomodoro', 'pomodoro-v2', technologiesList.frontEnd);
addProject('Market List', 'market-list', technologiesList.frontEnd);
addProject('Expense Chart', 'expense-chart', technologiesList.frontEnd);
addProject('BMI Calculator', 'bmi-calculator', technologiesList.frontEnd);

const toggleMenuButton = document.querySelector('#toggleMenu');

if (!toggleMenuButton) {
  throw new Error('The menu button has not been encountered');
}

const navLinks = document.querySelectorAll('.navigation li');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    if (document.body.classList.contains('menu-active')) {
      Menu.toggle();
    }
  });
});

toggleMenuButton.onclick = Menu.toggle;
