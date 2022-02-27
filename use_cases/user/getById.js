function getUser({ database, id }) {
  return database.selectById({
    table: 'user',
    id,
  });
}

module.exports = {
  getUser,
}