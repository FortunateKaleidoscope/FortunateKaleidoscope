angular.module('sniphub.auth', ['sniphub.services'])

.controller('AuthController', function ($scope, $window, $location, Auth) { //Auth
  $scope.isAuth = false;
  var checkAuth = function () {
    $scope.isAuth = JSON.parse(Auth.isAuth());
  };
  checkAuth();
});
