function updateBug({ database, id, values }) {
  return database.updateById({
    table: 'bug',
    id,
    values,
  });
}

module.exports = {
  updateBug,
}