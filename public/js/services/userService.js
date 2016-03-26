angular.module('userService', []).factory('User', ['$http', function($http){
  var users = []
  return {
    get: function(callback){
      $http.get('/orders').success(function(output){
        callback(output);
      })
    },
    create: function(newUser,callback){
      $http.post('/users', newUser).success(function(output){
        callback(output);
      })
    },
  }
}])
