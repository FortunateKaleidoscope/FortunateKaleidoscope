// FIX ALL THIS
angular.module('sniphub.snippets', [])

.controller('SnippetsController', function ($scope, $location, SniphubServices) {

  $scope.snippets = {};
  $scope.fetchTopTen = function () {
    //call factory function
    SniphubServices.fetchTopTen()
      .then(function ( snippets ) {
        $scope.data = snippets
      });
  };
  $scope.fetchByUser = function ( user ) {
    //call factory function
    SniphubServices.fetchByUser( user )
      .then(function ( snippets ) {
        $scope.snippets = snippets;
      });
  };
  $scope.searchByTerm = function ( term ) {
    //call factory function
    SniphubServices.searchByTerm( term )
      .then(function ( snippets ) {
        $scope.snippets = snippets;
      });
  };
  $scope.$watch('$viewContentLoaded', function () {
    $scope.fetchTopTen();
  });
});
