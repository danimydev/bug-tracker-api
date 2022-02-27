class DeleteController {

  #database;
  #usecase;

  constructor({ database, usecase }) {
    this.#database = database;
    this.#usecase = usecase;
  }

  execute(httpRequest) {
    const { id } = httpRequest.params;

    const deleted = this.#usecase({
      database: this.#database,
      id,
    });

    return {
      statusCode: 200,
      body: {
        deleted,
      }
    }

  }

}

module.exports = {
  DeleteController,
}