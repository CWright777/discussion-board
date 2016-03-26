angular.module('dashboardsCtrl', []).controller('dashboardsController', function($scope, User, $routeParams, $location){
  $scope.user = $routeParams
})
