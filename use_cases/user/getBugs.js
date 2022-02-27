function getBugs({ database, id }) {
  const bugs = database.select({
    table: 'bug',
  });
  return bugs.filter(u => u.userId === id);
}

module.exports = {
  getBugs,
}