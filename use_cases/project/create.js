function createProject({ projectFactory, database, values }) {
  const project = projectFactory.createProject(values);
  return database.insert({
    table: 'project',
    record: project,
  });
}

module.exports = {
  createProject,
}