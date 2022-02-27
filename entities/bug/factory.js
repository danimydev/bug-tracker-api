class BugFactory {

  #generateId;

  constructor({ generateId }) {
    this.#generateId = generateId;
  }

  createBug({ title, desc, type, priority, projectId, userId, completed }) {
    return {
      id: this.#generateId({ title, desc, type, priority }),
      title,
      desc,
      type,
      priority,
      projectId,
      userId,
      completed,
    }
  }

}

module.exports = {
  BugFactory,
}