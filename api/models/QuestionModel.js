'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  question: {
    type: String,
    required: 'Please enter the question'
  },
  option1: {
    type: String,
    required: 'Please enter the first option'
  },
  option2: {
    type: String,
    required: 'Please enter the second option'
  },
  option3: {
    type: String,
    required: 'Please enter the third option'
  },
  option4: {
    type: String,
    required: 'Please enter the fourth option'
  },
  correct: {
    type: String,
    required: 'Please enter the correct option'
  }
}, {collection: 'Question'});
module.exports = mongoose.model('Question', QuestionSchema);
