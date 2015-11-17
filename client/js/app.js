angular.module('sniphub', ['ngRoute','ui.router','sniphub.services','sniphub.snippets','sniphub.addSnippet', 'sniphub.auth', 'sniphub.snippetsUser','sniphub.editSnippet','sniphub.angular-ellipsis'])

<<<<<<< HEAD
=======
angular.module('sniphub', ['ngRoute','ui.router','sniphub.services','sniphub.snippets','sniphub.addSnippet', 'sniphub.auth', 'sniphub.snippetsUser','sniphub.angular-ellipsis'])
>>>>>>> 822978f5a8bf38ed73277643d69fffbe94fa9653
.config(function($stateProvider, $urlRouterProvider, $httpProvider){
  $urlRouterProvider.otherwise('snippets');
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
    .state('editSnippet', {
      url: '/users/:id/:snippetId',
      controller: 'EditSnippetController',
      views: {
        'main' : { templateUrl: 'html/editSnippet.html' }
      }
    })
    .state('users', {
      url: '/users/:id',
      controller: 'snippetsUserController',
      views: {
        'main' : { templateUrl: 'html/snippetUser.html'}
      }
    });

});
