'user strict';

var mongoose = require('mongoose'),
  question = mongoose.model('Question');

//insert question
exports.insert_question = function(req, res){
  var newQuestion = new Question(req.body);
  newQuestion.save(function(err, question) {
    if (err) {
      return res.status(400).send({
        message: err, status:'400'
      });
    }
    else {
      return res.json({question:req.body.question, message: 'question added successfully', status:'200'});
    }
  })
};
