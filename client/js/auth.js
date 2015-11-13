angular.module('sniphub.auth', ['sniphub.services'])

.controller('AuthController', function ($scope, $window, $location, Auth) { //Auth
  // $scope.user = {};

  $scope.isAuth = false;
  $scope.isHere = 'adsf';
  console.log($scope.isAuth);
  var checkAuth = function () {
    console.log(JSON.parse(Auth.isAuth()));
    $scope.isAuth = JSON.parse(Auth.isAuth());
  };
  checkAuth();

});
