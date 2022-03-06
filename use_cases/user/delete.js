class DeleteUserUseCase {

  #ormAdapter;

  constructor({ ormAdapter }) {
    this.#ormAdapter = ormAdapter;
  }

  async execute(values) {
    try {
      return this.#ormAdapter.remove({
        table: 'user',
        values,
      });
    } catch (error) {
      throw error;
    }

  }

}

module.exports = {
  DeleteUserUseCase,
}