class CreateController {

  #factory;
  #database;
  #usecase;

  constructor({ factory, database, usecase }) {
    this.#factory = factory;
    this.#database = database;
    this.#usecase = usecase;
  }

  execute(httpRequest) {

    const { body } = httpRequest;

    const user = this.#usecase({
      userFactory: this.#factory,
      database: this.#database,
      values: body,
    });

    return {
      statusCode: 200,
      body: {
        user,
      },
    };

  }

}

module.exports = {
  CreateController,
}