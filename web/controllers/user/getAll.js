class GetAllController {

  #database;
  #usecase;

  constructor({ database, usecase }) {
    this.#database = database;
    this.#usecase = usecase;
  }

  execute(httpRequest) {

    const users = this.#usecase({
      database: this.#database,
    });

    return {
      statusCode: 200,
      body: {
        users,
      },
    };

  }

}

module.exports = {
  GetAllController,
}