function getBugs({ database, id }) {
  const bugs = database.select({
    table: 'bug',
  });
  return bugs.filter(u => u.projectId === id);
}

module.exports = {
  getBugs,
}