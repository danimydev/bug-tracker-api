function createUser({ userFactory, database, values }) {
  const user = userFactory.createUser(values);
  return database.insert({
    table: 'user',
    record: user,
  });
}

module.exports = {
  createUser,
}