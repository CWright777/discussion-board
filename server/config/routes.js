//var Examples = require('../controllers/exampleController.js');

module.exports = function(app){
  app.get('/',function(req,res){
    Examples.index(req,res);
  });
  app.post('/examples',function(req,res){
    Examples.create(req,res);
  })
  app.delete('/examples/:id',function(req,res){
    Examples.delete(req,res);
  })
};
