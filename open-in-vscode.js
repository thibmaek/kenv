// Menu: Open in VS Code
// Description: Opens a project in Visual Studio Code
// Shortcut: cmd shift .

const projectDirPath = "~/Development";

const projects = ls(projectDirPath).map((dir) => {
  const fullPath = path.join(projectDirPath, dir);
  return {
    name: dir,
    value: fullPath,
    description: fullPath,
  };
});

const project = await arg("Which project:", projects);

edit(project);
