//this file is all done ---- dont mess with it

angular.module('sniphub', ['ngRoute','ui.router','sniphub.services','sniphub.snippets','sniphub.addSnippet', 'sniphub.auth', 'sniphub.snippetsUser'])
.config(function($stateProvider, $urlRouterProvider, $httpProvider){
  // $urlRouterProvider.otherwise('snippets');
  $stateProvider
    .state('snippets', {
      url: '/snippets',
      controller: 'SnippetsController',
      views: {
        'main' : { templateUrl: 'html/snippets.html' }
      }
    })
    .state('addSnippet', {
      url: '/addSnippet',
      controller: 'AddSnippetController',
      views: {
        'main' : { templateUrl: 'html/addSnippet.html' }
      }
    })
    .state('users', {
      url: '/users/:id',
      controller: "snippetsUserController",
      views: {
        'main' : { templateUrl: 'html/snippetUser.html'}
      }
    });

});
