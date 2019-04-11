'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: 'Please enter your username'
  },
  password: {
    type: String,
    required: 'Please enter the password'
  },
  name: {
    type: String,
    required: 'Please enter your name'
  }
}, {collection: 'User'});
module.exports = mongoose.model('User', UserSchema);
