class GetUserController {

  #usecase;

  constructor({ usecase }) {
    this.#usecase = usecase;
  }

  async execute(httpRequest) {
    try {
      const { id } = httpRequest.params;
      if (id) {
        const user = await this.#usecase.execute({ id });
        return {
          statusCode: 200,
          body: {
            user,
          }
        }
      }
      const users = await this.#usecase.execute({});
      return {
        statusCode: 200,
        body: {
          users,
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
  GetUserController,
}