angular.module('sniphub.editSnippet', [])

.controller('EditSnippetController', function ( $scope, $state, $stateParams, $location, SniphubServices ) {
  
  $scope.params = $stateParams;

  $scope.updateSnippet = function (  user, text, title, tabPrefix, scope  ) {
    SniphubServices.updateSnippet( snippetId, user, text, title, tabPrefix, scope ).then(function ( response ) {
      $state.go('snippets');
    });
  };
});
