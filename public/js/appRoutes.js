angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider

  .when('/', {
    templateUrl:'views/home.html',
    controller: 'loginsController'
  })
  .when('/dashboard/:id', {
    templateUrl:'views/dashboard.html',
    controller: 'dashboardsController'
  })

}]);
