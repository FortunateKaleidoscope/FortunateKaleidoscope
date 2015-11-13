// FIX ALL THIS
angular.module('sniphub.snippets', [])

.controller('SnippetsController', function (Auth, $scope, $state, $stateParams, $location, SniphubServices) {
  $scope.snippets = [];
  $scope.fetchTopTen = function () {
    //call factory function
    SniphubServices.fetchTopTen()
      .then(function ( snippets ) {
        $scope.snippets = snippets.data;
        $scope.inUserView = false;
      });

  };

  $scope.fetchByUser = function ( user ) {
    //call factory function
    SniphubServices.fetchByUser( user )
      .then(function ( snippets ) {
        $scope.snippets = snippets.data;
        $scope.inUserView = true;
      });
  };
  // EXTRA CREDIT
  // $scope.searchByTerm = function ( term ) {
  //   //call factory function
  //   SniphubServices.searchByTerm( term )
  //     .then(function ( snippets ) {
  //       $scope.snippets = snippets;
  //     });
  // };
  //call once upon app load
  $scope.$watch('$viewContentLoaded', function () {
    $scope.fetchTopTen();
  });

});
