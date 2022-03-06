class GetUserBugsController {

  #usecase;

  constructor({ usecase }) {
    this.#usecase = usecase;
  }

  async execute(httpRequest) {
    try {
      const { id } = httpRequest.params;
      const userBugs = await this.#usecase.execute({ id });

      return {
        statusCode: 200,
        body: {
          userBugs,
        }
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
  GetUserBugsController,
}