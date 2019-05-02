module.exports = app => {
  const {checkToken} = require('../middleware/');
  const controller = require('../controllers/watchlist.controller.js');
  app.post('/watchlist', checkToken, controller.create);
  app.get('/watchlist', checkToken, controller.findAll);
  app.put('/watchlist/:movieId', checkToken, controller.update);
  app.delete('/watchlist/:movieId', checkToken, controller.delete);
  // app.post('/api/watchlist', checkToken, controller.create);
  // app.get('/api/watchlist', checkToken, controller.findAll);
  // app.put('/api/watchlist/:movieId', checkToken, controller.update);
  // app.delete('/api/watchlist/:movieId', checkToken, controller.delete);
};
