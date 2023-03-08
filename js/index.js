import { Menu } from './menu.js';
import { addProject } from './addProjects.js';
import { addLink } from './links.js';
import './scrollToTop.js';
import { addReveal } from './scrollReveal.js';

const technologiesList = {
  frontEnd: ['html', 'css', 'js', 'github'],
};

addProject('Pomodoro', 'pomodoro-v2', technologiesList.frontEnd);
addProject('Market List', 'market-list', technologiesList.frontEnd);
addProject('Expense Chart', 'expense-chart', technologiesList.frontEnd);
addProject('BMI Calculator', 'bmi-calculator', technologiesList.frontEnd);

addLink('scroll-to-top', 'nav');
addLink('goToHome', '#home');
addLink('goToAbout', '#about');
addLink('goToProjects', '#projects');

addReveal(`
  nav h1,
  #home section,
  #home img,
  #about h2,
  #about img,
  #about p,
  #about a,
  #projects h2,
  #projects .project,
  #footer a,
  #footer li
`);

const toggleMenuButton = document.querySelector('#toggleMenu');

if (!toggleMenuButton) {
  throw new Error('The menu button has not been encountered');
}

const navLinks = document.querySelectorAll('.navigation li');

navLinks.forEach((navigationLink) => {
  navigationLink.addEventListener('click', (event) => Menu.hide());
});

toggleMenuButton.onclick = Menu.toggle;
