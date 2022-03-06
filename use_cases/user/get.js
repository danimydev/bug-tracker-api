class GetUserUseCase {

  #ormAdapter;

  constructor({ ormAdapter }) {
    this.#ormAdapter = ormAdapter;
  }

  async execute(values) {
    try {
      return this.#ormAdapter.select({
        table: 'user',
        values,
      });
    } catch (error) {
      throw error;
    }
  }

}

module.exports = {
  GetUserUseCase,
}