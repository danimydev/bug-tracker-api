class UpdateController {

  #database;
  #usecase;

  constructor({ database, usecase }) {
    this.#database = database;
    this.#usecase = usecase;
  }

  execute(httpRequest) {
    const { id } = httpRequest.params;
    const { body } = httpRequest;

    const updated = this.#usecase({
      database: this.#database,
      id,
      values: body,
    });

    return {
      statusCode: 200,
      body: {
        updated,
      }
    }

  }

}

module.exports = {
  UpdateController,
}