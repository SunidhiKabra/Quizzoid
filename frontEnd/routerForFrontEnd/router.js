module.exports.routerForFrontEnd = function(app){

  app.get('/', function(req, res, next){
    if(req.session.user === undefined){
        res.render('index');
    }
    else{
      // res.redirect('/home');
    }
  });

  app.get('/sign_up', function(req, res, next){
    if(req.session.user != undefined){
        req.session.user = null;
    }
    res.render('sign_up');
  });

  app.get('/successful_sign_up', function(req, res, next){
    res.render('successful_sign_up');
  });

  app.get('/log_in', function(req, res, next){
    if(req.session.user != undefined){
        req.session.user = null;
    }
    res.render('login');
  });

  app.get('/home_page', function(req, res, next){
    if(req.session.user === undefined){
        res.redirect('/log_in');
      }
    else{
      res.render('homePage');
    }
  });

  app.get('/create_quiz', function(req, res, next){
    if(req.session.user === undefined){
        res.redirect('/log_in');
      }
    else{
      res.render('createQuiz');
    }
  });

  app.get('/start_quiz', function(req, res, next){
    if(req.session.user === undefined){
        res.redirect('/log_in');
      }
    else{
        res.render('startQuiz');
    }
  });


  // app.get('/start_quiz', function(req, res, next){
  //       res.render('startQuiz');
  // });

};
