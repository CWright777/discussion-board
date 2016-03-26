angular.module('dashboardsCtrl', []).controller('dashboardsController', function($scope, User, $routeParams, $location){
  User.show($routeParams.id,function(user){
    $scope.user = user;
  })
})
