//this is all done. dont touch

angular.module('sniphub.addSnippet', [])

.controller('AddSnippetController', function ($scope, $location, SniphubServices) {
  $scope.submitted = function(){
    //here just let the user know they submitted the thing
  }
  //call another method in services
  $scope.addSnippet = function (  user, text, tags  ) {
    SniphubServices.addSnippet( user, text, tags ).then(function ( response ) {
      $scope.submitted()
    });
  };
});
