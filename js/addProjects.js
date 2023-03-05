function addProject(alternativeName, projectName, technologies) {
  let projects = document.querySelector('.projects-grid');

  const newProject = `
  <div class="project">
    <a href="https://nesdark.github.io/${projectName}/" target="_blank">
      <img src="./public/${projectName}.png" alt="${alternativeName} project" />

      <ul class="technologies">
        ${makeTechnologies(technologies)}
      </ul>
    </a>
  </div>
  `;

  projects.innerHTML += newProject;
}

function makeTechnologies(technologies) {
  let technologiesSet = '';
  console.log(technologies);
  technologies.forEach((technology) => {
    technologiesSet += `
      <li class="${technology}">
        <img src="./public/${technology}.svg" alt="Have ${technology}" />
      </li>
    `;
  });

  return technologiesSet;
}

export { addProject };
