function getAll({ database }) {
  return database.select({
    table: 'user',
  });
}

module.exports = {
  getAll,
}