class CreateUserController {

  #usecase;

  constructor({ usecase }) {
    this.#usecase = usecase;
  }

  async execute(httpRequest) {
    try {
      const { body } = httpRequest;
      const user = await this.#usecase.execute(body);

      return {
        statusCode: 201,
        body: {
          user,
        },
      };
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
  CreateUserController,
}