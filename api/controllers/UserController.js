'user strict';

var mongoose = require('mongoose'),
  user = mongoose.model('User');

// create a user
exports.create_user = function(req, res){
  User.findOne({
    username : req.body.username
  }, function(err, user){
    if(err) throw err;
    if(!user){
      var newUser = new User(req.body);
      newUser.save(function(err, user) {
        if (err) {
          return res.status(400).send({
            message: err, status:'400'
          });
        }
        else {
          return res.json({name:req.body.username, message: 'user saved successfully', status:'200'});
        }
      });
    }
    else if (user) {
      res.status(401).json({ message: 'this type of user already exists.', status: '401' });
    }
  });
};
