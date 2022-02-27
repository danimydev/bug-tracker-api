class UserFactory {

  #generateId;
  #encrypted;

  constructor({ generateId, encrypted }) {
    this.#generateId = generateId;
    this.#encrypted = encrypted;
  }

  createUser({ name, displayName, email, projectId, password }) {
    return {
      id: this.#generateId({ name, displayName, email }),
      name,
      displayName,
      email,
      projectId,
      password: this.#encrypted(password),
    }
  }

}

module.exports = {
  UserFactory,
}