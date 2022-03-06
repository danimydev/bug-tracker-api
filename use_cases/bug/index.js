const { CreateBugUseCase } = require('./create');
const { GetBugUseCase } = require('./get');
const { DeleteBugUseCase } = require('./delete');
const { UpdateBugUseCase } = require('./update');

const { bugFactory } = require('../../entities/bug');
const { knexAdapter } = require('../../database/adapters');

module.exports = {
  getBugUseCase: new GetBugUseCase({
    ormAdapter: knexAdapter,
  }),
  createBugUseCase: new CreateBugUseCase({
    ormAdapter: knexAdapter,
    factory: bugFactory,
  }),
  deleteBugUseCase: new DeleteBugUseCase({
    ormAdapter: knexAdapter,
  }),
  updateBugUseCase: new UpdateBugUseCase({
    ormAdapter: knexAdapter,
  }),
}