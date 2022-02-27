function deleteProject({ database, id }) {
  return database.deleteById({
    table: 'project',
    id,
  });
}

module.exports = {
  deleteProject,
}