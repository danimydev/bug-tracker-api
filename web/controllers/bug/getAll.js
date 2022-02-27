class GetAllController {

  #database;
  #usecase;

  constructor({ database, usecase }) {
    this.#database = database;
    this.#usecase = usecase;
  }

  execute(httpRequest) {

    const bugs = this.#usecase({
      database: this.#database,
    });

    return {
      statusCode: 200,
      body: {
        bugs,
      },
    };

  }

}

module.exports = {
  GetAllController,
}