// FIX ALL THIS
angular.module('sniphub.snippets', ['hljs'])

.controller('SnippetsController', function (Auth, $scope, $location, SniphubServices) {
  $scope.snippets = [];
  $scope.fetchTopTen = function () {
    //call factory function
    SniphubServices.fetchTopTen()
      .then(function ( snippets ) {
        $scope.snippets = snippets.data;
        $scope.snippets.forEach(function (item) {
          item.text = unescape(item.text);
          item.title = unescape(item.title);
        });
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
