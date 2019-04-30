module.exports = app => {
  const {checkToken} = require('../middleware/');
  const controller = require('../controllers/watchlist.controller.js');
  app.post('/watchlist', checkToken, controller.create);
  app.get('/watchlist', checkToken, controller.findAll);
  // app.get('/watchlist/:movieId', controller.findOne);
  app.delete('/watchlist/:movieId', checkToken, controller.delete);
};
