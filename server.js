var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
    mongoose = require('mongoose'),
    User = require('./api/models/UserModel'),
    bodyParser = require('body-parser');

var session = require('express-session');
app.use(session({ secret: 'this-is-a-secret-token', cookie: { maxAge: 60000 }}));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/quizzoid', { useNewUrlParser: true });
var db = mongoose.connection;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/Routes');
routes(app);

mongoose.connection.once('open', function(){
  console.log('Connectione made');
}).on('error', function(error){
  console.log('COnnection error, ', error);
});

app.listen(port);

console.log('API started on port- ' + port);
