const createPage = (teamMembers) => {
  const createManager = (manager) => {
    return `
    <div class="card card-compact w-96 shadow-xl bg-neutral">
    <figure><img src="https://api.lorem.space/image/burger?w=400&h=225&hash=8B7BCDC2" alt="Profile Photo" /></figure>
      <div class="card-body">
        <h2 class="card-title">
        ${manager.getName()}
          <div class="badge badge-secondary">${manager.getRole()}</div>
        </h2>
        <ul>
          <li>ID : ${manager.getId()}</li>
          <li><a href="mailto:${manager.getEmail()}">Email : ${manager.getEmail()}</a></li>
          <li>Office number: ${manager.getNumber()}</li>
        </ul>
        <div class="card-actions justify-end">
          <button class="btn btn-sm"><a href="mailto:${manager.getEmail()}">Email ${manager.getName()}</a></button>
        </div>
      </div>
      </div>
          `;
  };

  const createEngineer = (engineer) => {
    return `
    <div class="card card-compact w-96 shadow-xl bg-neutral">
    <figure><img src="https://api.lorem.space/image/burger?w=400&h=225&hash=225E6693" alt="Profile Photo" /></figure>
        <div class="card-body">
          <h2 class="card-title">
          ${engineer.getName()}
            <div class="badge badge-secondary">${engineer.getRole()}</div>
          </h2>
          <ul>
            <li>ID : ${engineer.getId()}</li>
            <li><a href="mailto:${engineer.getEmail()}">Email : ${engineer.getEmail()}</a></li>
            <li>GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
          </ul>
          <div class="card-actions justify-end">
          <button class="btn btn-sm"><a href="mailto:${engineer.getEmail()}">Email ${engineer.getName()}</a></button>
          </div>
        </div>
        </div>
            `;
  };

  const createIntern = (intern) => {
    return `
    <div class="card card-compact w-96 shadow-xl bg-neutral">
    <figure><img src="https://api.lorem.space/image/burger?w=400&h=225&hash=2D297A22" alt="Profile Photo" /></figure>
        <div class="card-body">
          <h2 class="card-title">
          ${intern.getName()}
            <div class="badge badge-secondary">${intern.getRole()}</div>
          </h2>
          <ul>
            <li>ID : ${intern.getId()}</li>
            <li><a href="mailto:${intern.getEmail()}">Email : ${intern.getEmail()}</a></li>
            <li>School: ${intern.getSchool()}</li></ul>
          <div class="card-actions justify-end">
          <button class="btn btn-sm"><a href="mailto:${intern.getEmail()}">Email ${intern.getName()}</a></button>
          </div>
        </div>
        </div>
            `;
  };

  const html = [];

  html.push(
    teamMembers
      .filter((employee) => employee.getRole() === 'Manager')
      .map((manager) => createManager(manager))
  );
  html.push(
    teamMembers
      .filter((employee) => employee.getRole() === 'Engineer')
      .map((engineer) => createEngineer(engineer))
      .join('')
  );
  html.push(
    teamMembers
      .filter((employee) => employee.getRole() === 'Intern')
      .map((intern) => createIntern(intern))
      .join('')
  );

  return html.join('');
};

module.exports = (teamMembers) => {
  return `
  <!doctype html>
  <html data-theme="dracula">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/daisyui@2.15.3/dist/full.css" rel="stylesheet" type="text/css" />
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    
    <body>
      <header class="navbar bg-base-100">
        <a href="/" class="btn btn-ghost normal-case text-xl">Team Directory</a>
      </header>
      <div class="flex px-6 justify-between">
          ${createPage(teamMembers)}
      </div>
    </body>

  </html>
    `;
};
