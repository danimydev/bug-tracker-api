const { CreateBugController } = require('./create');
const { GetBugController } = require('./get');
const { DeleteBugController } = require('./delete');
const { UpdateBugController } = require('./update');
const {
  createBugUseCase,
  getBugUseCase,
  deleteBugUseCase,
  updateBugUseCase } = require('../../../use_cases/bug');

module.exports = {
  getBugControler: new GetBugController({ usecase: getBugUseCase }),
  createBugController: new CreateBugController({ usecase: createBugUseCase }),
  deleteBugController: new DeleteBugController({ usecase: deleteBugUseCase }),
  updateBugController: new UpdateBugController({ usecase: updateBugUseCase }),
}