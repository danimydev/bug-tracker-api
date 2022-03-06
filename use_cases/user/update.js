class UpdateUserUseCase {

  #ormAdapter;

  constructor({ ormAdapter }) {
    this.#ormAdapter = ormAdapter;
  }

  async execute(values) {
    try {
      const { id, ...newValues } = values;
      return this.#ormAdapter.udpate({
        table: 'user',
        id: id,
        values: { ...newValues },
      });
    } catch (error) {
      throw error;
    }
  }

}

module.exports = {
  UpdateUserUseCase,
}