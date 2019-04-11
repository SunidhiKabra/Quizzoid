'use strict';
module.exports = function(app) {
  var UserHandlers = require('../controllers/UserController.js');

  app.route('/sign_up')
      .post(UserHandlers.create_user);
};
