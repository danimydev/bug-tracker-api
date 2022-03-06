class UpdateBugController {

  #usecase;

  constructor({ usecase }) {
    this.#usecase = usecase;
  }

  async execute(httpRequest) {
    try {
      const { id } = httpRequest.params;
      const { body } = httpRequest;

      const updated = await this.#usecase.execute({
        id,
        ...body,
      });

      return {
        statusCode: 200,
        body: {
          updated,
        }
      }
    } catch (error) {
      return {
        statusCode: 500,
        error: JSON.stringify(error),
      }
    }
  }

}

module.exports = {
  UpdateBugController,
}