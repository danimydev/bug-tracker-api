function getBug({ database, id }) {
  return database.selectById({
    table: 'bug',
    id,
  });
}

module.exports = {
  getBug,
}