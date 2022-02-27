function deleteUser({ database, id }) {
  return database.deleteById({
    table: 'user',
    id,
  });
}

module.exports = {
  deleteUser,
}