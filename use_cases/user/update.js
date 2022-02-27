function updateUser({ database, id, values }) {
  return database.updateById({
    table: 'user',
    id,
    values,
  });
}

module.exports = {
  updateUser,
}