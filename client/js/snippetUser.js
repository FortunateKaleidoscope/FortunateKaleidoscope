angular.module('sniphub.snippetsUser', [])

.controller('SnippetsUserController', function (Auth, $state, $stateParams, $scope, $location, SniphubServices) {
$scope.snippets = [];
$scope.params = $stateParams;
$scope.fetchByUser = function ( user ) {
    //call factory function
    SniphubServices.fetchByUser( user )
      .then(function ( snippets ) {
        $scope.snippets = snippets.data;
        $scope.snippets.forEach(function (item) {
          item.text = unescape(item.text);
          item.title = unescape(item.title);
        });
      });
  };
  $scope.$watch('$viewContentLoaded', function () {
    $scope.fetchByUser($scope.params.id);
  });

})