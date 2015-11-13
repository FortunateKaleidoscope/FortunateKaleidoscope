// FIX ALL THIS
angular.module('sniphub.snippets', ['ngSanitize'])

.controller('SnippetsController', function (Auth, $scope, $state, $stateParams, $location, SniphubServices, Utility, $sce) {
  $scope.snippets = [];
  $scope.fetchTopTen = function () {
    //call factory function
    SniphubServices.fetchTopTen()
      .then(function ( snippets ) {
        $scope.snippets = snippets.data;
        $scope.snippets.forEach(function (item) {
          // $scope.unescape(item.text);
          console.log(item.text)
        });
      });

  };

  $scope.fetchByUser = function ( user ) {
    //call factory function
    SniphubServices.fetchByUser( user )
      .then(function ( snippets ) {
        $scope.snippets = snippets.data;
        // $scope.snippets.forEach(function (item) {
        //   $scope.unescape(item.text);
        // });
      });
  };

  $scope.unescape = function ( string ) {
    return Utility.unescapeQuotes( string );
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
