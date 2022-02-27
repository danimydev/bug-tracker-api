function deleteBug({ database, id }) {
  return database.deleteById({
    table: 'bug',
    id,
  });
}

module.exports = {
  deleteBug,
}