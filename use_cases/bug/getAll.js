function getAll({ database }) {
  return database.select({
    table: 'bug',
  });
}

module.exports = {
  getAll,
}