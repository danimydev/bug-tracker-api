function makeExpressCallback(controller) {
  return async (req, res) => {
    const httpRequest = {
      params: req.params,
      body: req.body,
    }
    const { statusCode, body } = await controller.execute(httpRequest);
    res.status(statusCode).json(body);
  }
}

function makeAuthMiddleware(authMiddleware) {
  return (req, res, next) => {
    const httpRequest = {
      headers: req.headers,
      params: req.params,
      body: req.body,
    }
    const { statusCode } = authMiddleware.execute(httpRequest);
    if (statusCode === 401) {
      return res.status(statusCode).json('forbidden');
    }
    next();
  }
}

module.exports = {
  makeExpressCallback,
  makeAuthMiddleware,
}