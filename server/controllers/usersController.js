var mongoose = require('mongoose');

var User = mongoose.model('User');

var getUsers = function(callback){
  User.find({}, function(err,allUsers){
    if(err){
      console.log(err);
    } else {
      callback(allUsers);
    }
  })
}

var isUserNameTaken = function(name){
  getUsers(function(allUsers){
    for(var user in allUsers){
      if(user.name = name){
        return false;
      } 
    }
    return true;
  })
}

module.exports = {
  index: function(req,res){
  },
  create: function(req,res){
    if(isUserNameTaken(req.body.name)){
      //TODO: add message saying user is taken
      console.log('User taken');
    } else {
      var newUser = new User({
        name: req.body.name
      })
      newUser.save(function(err){
        if(err){
          console.log(err);
        } else {
          res.json(newUser.id);
        }
      })
    }
  },
  show: function(req,res){
    User.findOne({_id: req.params.id}, function(err,user){
      res.json(user);
    })
  }
}
