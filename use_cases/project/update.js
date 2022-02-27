function updateProject({ database, id, values }) {
  return database.updateById({
    table: 'project',
    id,
    values,
  });
}

module.exports = {
  updateProject,
}