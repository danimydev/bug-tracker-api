function getProject({ database, id }) {
  return database.selectById({
    table: 'project',
    id,
  });
}

module.exports = {
  getProject,
}