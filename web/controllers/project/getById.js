class GetByIdController {

  #database;
  #usecase;

  constructor({ database, usecase }) {
    this.#database = database;
    this.#usecase = usecase;
  }

  execute(httpRequest) {

    const { id } = httpRequest.params;

    const project = this.#usecase({
      database: this.#database,
      id,
    });

    return {
      statusCode: 200,
      body: {
        project,
      }
    };

  }

}

module.exports = {
  GetByIdController,
}