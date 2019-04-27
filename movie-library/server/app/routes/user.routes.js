module.exports = app => {
  const controller = require('../controllers/user.controller.js');
  app.post('/user/login', controller.login);
  app.post('/user/logout', controller.logout);
  app.post('/user/register', controller.register);
};
