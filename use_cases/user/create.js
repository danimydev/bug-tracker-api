class CreateUserUseCase {

  #ormAdapter;
  #factory;

  constructor({ ormAdapter, factory }) {
    this.#ormAdapter = ormAdapter;
    this.#factory = factory;
  }

  async execute(values) {
    try {
      const user = this.#factory.create(values);
      return this.#ormAdapter.insert({
        table: 'user',
        values: user,
      });
    } catch (error) {
      throw error;
    }
  }

}

module.exports = {
  CreateUserUseCase,
}