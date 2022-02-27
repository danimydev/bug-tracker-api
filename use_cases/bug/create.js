function createBug({ bugFactory, database, values }) {
  const bug = bugFactory.createBug(values);
  return database.insert({
    table: 'bug',
    record: bug,
  });
}

module.exports = {
  createBug,
}