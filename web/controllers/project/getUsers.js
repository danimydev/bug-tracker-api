class GetUsersController {

  #database;
  #usecase;

  constructor({ database, usecase }) {
    this.#database = database;
    this.#usecase = usecase;
  }

  execute(httpRequest) {

    const { id } = httpRequest.params;

    const projectUsers = this.#usecase({
      database: this.#database,
      id,
    });

    return {
      statusCode: 200,
      body: {
        projectUsers,
      }
    };

  }

}

module.exports = {
  GetUsersController,
}