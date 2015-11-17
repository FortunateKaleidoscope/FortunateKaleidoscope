angular.module('sniphub.auth', ['sniphub.services'])

.controller('AuthController', function ($scope, $window, $location, Auth) { //Auth
  $scope.isAuth = false;
  var checkAuth = function () {
    // parses out boolean isAuth from cookie
    $scope.isAuth = !!Auth.isAuth( "isAuth" );
    // parses out usernmae from cookie
    $scope.username = Auth.isAuth( "username" );
  };

  checkAuth();
});
