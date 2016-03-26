var Users = require('../controllers/usersController.js');

module.exports = function(app){
  app.get('/',function(req,res){
    Users.index(req,res);
  });
  app.post('/users',function(req,res){
    Users.create(req,res);
  })
  app.get('/users/:id',function(req,res){
    Users.show(req,res);
  })
};
