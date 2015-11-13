// FIX ALL THIS
angular.module('sniphub.snippets', [])

.controller('SnippetsController', function ($scope, $location, SniphubServices) {
  $scope.snippets = [];
  $scope.fetchTopTen = function () {
    //call factory function
    SniphubServices.fetchTopTen()
      .then(function ( snippets ) {
        $scope.snippets = snippets.data;
      });
  };
  $scope.fetchByUser = function ( $event ) {
    var username = $event.target.innerHTML
    //call factory function
    console.log($event.target.innerHTML);
    SniphubServices.fetchByUser( username )
      .then(function ( snippets ) {
        $scope.snippets = snippets.data;
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
