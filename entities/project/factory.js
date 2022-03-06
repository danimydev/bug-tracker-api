class ProjectFactory {

  #generateId;

  constructor({ generateId }) {
    this.#generateId = generateId;
  }

  createProject({ name, desc = 'no description' }) {

    if (name.trim().length < 4) {
      throw new Error('project name length must be at least 4');
    }

    return {
      id: this.#generateId(),
      name,
      desc,
    }
  }

}

module.exports = {
  ProjectFactory,
}