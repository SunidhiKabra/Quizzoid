'use strict';
module.exports = function(app) {
  var UserHandlers = require('../controllers/UserController.js');

  app.route('/sign_up')
      .post(UserHandlers.create_user);

  app.route('/sign_in')
      .post(UserHandlers.user_signin);
};
