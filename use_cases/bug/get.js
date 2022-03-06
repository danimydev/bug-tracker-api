class GetBugUseCase {

  #ormAdapter;

  constructor({ ormAdapter }) {
    this.#ormAdapter = ormAdapter;
  }

  async execute(values) {
    try {
      return this.#ormAdapter.select({
        table: 'bug',
        values,
      });
    } catch (error) {
      throw error;
    }
  }

}

module.exports = {
  GetBugUseCase,
}