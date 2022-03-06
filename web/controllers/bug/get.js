class GetBugController {

  #usecase;

  constructor({ usecase }) {
    this.#usecase = usecase;
  }

  async execute(httpRequest) {
    try {
      const { id } = httpRequest.params;
      if (id) {
        const bug = await this.#usecase.execute({ id });
        return {
          statusCode: 200,
          body: {
            bug,
          }
        }
      }
      const bugs = await this.#usecase.execute({});
      return {
        statusCode: 200,
        body: {
          bugs,
        }
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: {
          error: JSON.stringify(error),
        }
      }
    }
  }

}

module.exports = {
  GetBugController,
}