module.exports = app => {
  const controller = require('../controllers/books.controller.js');
  app.post('/watchlist', controller.create);
  app.get('/watchlist', controller.findAll);
  app.get('/watchlist/:movieId', controller.findOne);
  app.delete('/watchlist/:movieId', controller.delete);
};
