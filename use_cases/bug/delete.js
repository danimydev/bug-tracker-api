class DeleteBugUseCase {

  #ormAdapter;

  constructor({ ormAdapter }) {
    this.#ormAdapter = ormAdapter;
  }

  async execute(values) {
    try {
      return this.#ormAdapter.remove({
        table: 'bug',
        values,
      });
    } catch (error) {
      throw error;
    }
  }

}

module.exports = {
  DeleteBugUseCase,
}