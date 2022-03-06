class BugFactory {

  #generateId;
  #validateId;

  constructor({ generateId, validateId }) {
    this.#generateId = generateId;
    this.#validateId = validateId;
  }

  create({ title, desc, type, priority, projectId, userId, completed = false }) {

    if (title.trim().length < 4) {
      throw new Error('bug title length mus be greater than 4');
    }

    if (!this.#validateId(projectId)) {
      throw new Error('invalid projectId passed');
    }

    if (!this.#validateId(userId)) {
      throw new Error('invalid userId passed');
    }

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