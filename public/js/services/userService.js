angular.module('userService', []).factory('User', ['$http', function($http){
  return {
    show: function(userId,callback){
      $http.get('/users/' + userId).success(function(output){
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
