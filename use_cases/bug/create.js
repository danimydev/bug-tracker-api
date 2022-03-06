class CreateBugUseCase {

  #ormAdapter;
  #factory;

  constructor({ ormAdapter, factory }) {
    this.#ormAdapter = ormAdapter;
    this.#factory = factory;
  }

  async execute(values) {
    try {
      const bug = this.#factory.create(values);
      return this.#ormAdapter.insert({
        table: 'bug',
        values: bug,
      });
    } catch (error) {
      throw error;
    }
  }

}

module.exports = {
  CreateBugUseCase,
}