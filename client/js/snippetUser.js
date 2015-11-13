angular.module('sniphub.snippetsUser', [])

.controller('SnippetsUserController', function (Auth, $state, $stateParams, $scope, $location, SniphubServices) {
$scope.snippets = [];
$scope.params = $stateParams;
$scope.fetchByUser = function ( user ) {
    //call factory function
    SniphubServices.fetchByUser( user )
      .then(function ( snippets ) {
        $scope.snippets = snippets.data;
        $scope.inUserView = true;
      });
  };
  $scope.$watch('$viewContentLoaded', function () {
    $scope.fetchByUser($scope.params.id);
  });

})