class GetAllController {

  #database;
  #usecase;

  constructor({ database, usecase }) {
    this.#database = database;
    this.#usecase = usecase;
  }

  execute(httpRequest) {

    const projects = this.#usecase({
      database: this.#database,
    });

    return {
      statusCode: 200,
      body: {
        projects,
      },
    };

  }

}

module.exports = {
  GetAllController,
}