'use strict';
module.exports = function(app) {
  var UserHandlers = require('../controllers/UserController.js');
  var QuestionHandlers = require('../controllers/QuestionController.js');

  app.route('/sign_up')
      .post(UserHandlers.create_user);

  app.route('/sign_in')
      .post(UserHandlers.user_signin);

  app.route('/insert_question')
      .post(QuestionHandlers.insert_question);

  app.route('/get_all_questions')
      .post(QuestionHandlers.get_all_questions);
};
