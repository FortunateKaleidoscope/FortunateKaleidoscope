angular.module('sniphub.editSnippet', [])

.controller('EditSnippetController', function ( Auth, $scope, $state, $stateParams, $location, SniphubServices ) {
  
  $scope.params = $stateParams;

  $scope.fetchSnippetById = function ( user, id ) {
    //fetch the snippet by provided snippet id;
  SniphubServices.fetchSnippetById( user, id ).then(function ( snippet ) {
    $scope.inputEntry = snippet.text;
    $scope.titleField = snippet.title;
    $scope.tabField = snippet.tabPrefix;
  });

  }

  $scope.updateSnippet = function ( snippetId, user, text, title, tabPrefix, scope  ) {

    SniphubServices.updateSnippet( snippetId, user, text, title, tabPrefix, scope ).then(function ( response ) {
      $state.go('snippets');
    });
  };
});
