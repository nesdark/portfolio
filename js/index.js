import { Menu } from './menu.js';
import { addProject } from './addProjects.js';

// addProject

const technologiesSet = {
  frontEnd: ['html', 'css', 'js', 'github'],
};

addProject('Pomodoro', 'pomodoro-v2', technologiesSet.frontEnd);
addProject('Market List', 'market-list', technologiesSet.frontEnd);
addProject('Expense Chart', 'expense-chart', technologiesSet.frontEnd);
addProject('BMI Calculator', 'bmi-calculator', technologiesSet.frontEnd);

const toggleMenuButton = document.querySelector('#toggleMenu');

toggleMenuButton.onclick = Menu.toggle;
