function getUsers({ database, id }) {
  const users = database.select({
    table: 'user',
  });
  return users.filter(u => u.projectId === id);
}

module.exports = {
  getUsers,
}