const router = require('express').Router();
const { exportMemoryDBToJSON } = require('../../database/persistance');
const { memoryDatabase } = require('../../database');

router.post('/save', (req, res) => {
  try {
    exportMemoryDBToJSON({
      memoryDatabase,
    });
    res.status(201).json({
      msg: 'database is saved',
    });
  } catch (error) {
    res.status(500).json({
      msg: 'internal error',
    });
  }
});

module.exports = router;