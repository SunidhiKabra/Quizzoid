module.exports.routerForFrontEnd = function(app){

  app.get('/', function(req, res, next){
    if(req.session.user === undefined || req.session.user === null){
        res.render('index', {user: null});
    }
    else{
      res.redirect('/home_page');
    }
  });

  app.get('/sign_up', function(req, res, next){
    if(req.session.user != undefined){
        req.session.user = null;
        res.locals.user = null;
    }
    res.render('sign_up', {user: null});
  });

  app.get('/successful_sign_up', function(req, res, next){
    res.render('successful_sign_up', {user: null});
  });

  app.get('/log_in', function(req, res, next){
    if(req.session.user != undefined){
        req.session.user = null;
    }
    res.status(301).render('login', {user: null});
  });

  app.get('/home_page', function(req, res, next){
    if(req.session.user === undefined || req.session.user === null){
        res.status(301).redirect('/log_in');
      }
    else{
      res.render('homePage', {user: req.session.user});
    }
  });

  app.get('/create_quiz', function(req, res, next){
    if(req.session.user === undefined || req.session.user === null){
        res.status(301).redirect('/log_in');
      }
    else{
      res.render('createQuiz', {user: req.session.user});
    }
  });

  app.get('/start_quiz', function(req, res, next){
    if(req.session.user === undefined || req.session.user === null){
        res.status(301).redirect('/log_in');
      }
    else{
        res.render('startQuiz', {user: req.session.user});
    }
  });

  app.post('/score', function(req, res, next){
    if(req.session.user === undefined || req.session.user === null){
        res.status(301).redirect('/log_in');
      }
    else{
      res.render('score', {score: req.body.score, maxScore: req.body.maxScore, percentage: req.body.percentage, user: req.session.user});
    }
  });

  app.get('/contact_us', function(req, res, next){
        res.render('contact', {user: null});
  });

  app.get('/log_out', function(req, res, next){
      req.session.user = null;
      res.status(301).redirect('/');
  });
};
