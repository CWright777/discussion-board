angular.module('loginsCtrl', []).controller('loginsController', function($scope, User, $location){
  $scope.create = function(){
    User.create($scope.newUser,function(user){
      console.log(user)
      $scope.user = user;

      $location.path('/dashboard/' + $scope.user)
    })
  }
})
