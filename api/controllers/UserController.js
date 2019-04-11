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

//user sign in
exports.user_signin = function(req, res){
  User.findOne({
      username: req.body.username,
      password: req. body.password
    }, function(err, user){
      if (err)  throw err;
      if (!user) {
        res.status(401).json({ message: 'Authentication failed. user not found.', status: '401' });
      }
      else if (user) {
        req.session.user = user.username;
        console.log(req.session.user);
        return res.json({ username: req.session.user.username, message: 'Authentication successful, user logged in', status: '200' });
      }
    }
  );
};
