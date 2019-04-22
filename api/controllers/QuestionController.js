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

//get all questions
exports.get_all_questions = function(req, res){
  mongoose.connection.collection("Question").find({}).toArray(function(err, result) {
    if (err) throw err;
    return res.json(result);
  });
};
