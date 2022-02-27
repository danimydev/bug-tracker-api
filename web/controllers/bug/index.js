const { GetAllController } = require('./getAll');
const { CreateController } = require('./create');
const { GetByIdController } = require('./getById');
const { UpdateController } = require('./update');
const { DeleteController } = require('./delete');

const { getBug } = require('../../../use_cases/bug/getById');
const { getAll } = require('../../../use_cases/bug/getAll');
const { createBug } = require('../../../use_cases/bug/create');
const { updateBug } = require('../../../use_cases/bug/update');
const { deleteBug } = require('../../../use_cases/bug/delete');

const { memoryDatabase } = require('../../../database');

const { bugFactory } = require('../../../entities/bug');

module.exports = {
  getAll: new GetAllController({
    database: memoryDatabase,
    usecase: getAll,
  }),
  getById: new GetByIdController({
    database: memoryDatabase,
    usecase: getBug,
  }),
  create: new CreateController({
    database: memoryDatabase,
    usecase: createBug,
    factory: bugFactory,
  }),
  update: new UpdateController({
    database: memoryDatabase,
    usecase: updateBug,
  }),
  destroy: new DeleteController({
    database: memoryDatabase,
    usecase: deleteBug,
  }),
}