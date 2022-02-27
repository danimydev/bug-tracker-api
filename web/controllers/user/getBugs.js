class GetBugsController {

  #database;
  #usecase;

  constructor({ database, usecase }) {
    this.#database = database;
    this.#usecase = usecase;
  }

  execute(httpRequest) {

    const { id } = httpRequest.params;

    const projectBugs = this.#usecase({
      database: this.#database,
      id,
    });

    return {
      statusCode: 200,
      body: {
        projectBugs,
      }
    };

  }

}

module.exports = {
  GetBugsController,
}