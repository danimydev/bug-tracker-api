class UserFactory {

  #generateId;
  #encrypted;
  #validateId;

  constructor({ generateId, validateId, encrypted }) {
    this.#generateId = generateId;
    this.#encrypted = encrypted;
    this.#validateId = validateId;
  }

  createUser({ name, displayName = name, email, projectId, password }) {

    if (name.trim().length < 4) {
      throw new Error('bug title length mus be greater than 4');
    }

    if (!this.#validateId(projectId)) {
      throw new Error('invalid projectId passed');
    }

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