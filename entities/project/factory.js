class ProjectFactory {

  #generateId;

  constructor({ generateId }) {
    this.#generateId = generateId;
  }

  createProject({ name, desc }) {
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