//this file is all done ---- dont mess with it

angular.module('sniphub', ['ngRoute','ui.router','sniphub.services','sniphub.snippets','sniphub.addSnippet', 'sniphub.auth'])
.config(function($stateProvider, $urlRouterProvider, $httpProvider){
  $urlRouterProvider.otherwise('snippets');
  $stateProvider
    .state('snippets', {
      url: '/snippets',
      controller: 'SnippetsController',
      views: {
        'top' : { templateUrl: 'html/navbar.html'},
        'main' : { templateUrl: 'html/snippets.html' }
      }
    })
    .state('addSnippet', {
      url: '/addSnippet',
      controller: 'AddSnippetController',
      views: {
        'top' : { templateUrl: 'html/navbar.html'},
        'main' : { templateUrl: 'html/addSnippet.html' }
      }
    });
    // .state('users', {
    //   url: '/users',
    //   controller: 'SnippetsController',
    //   views: {
    //     'top' : { templateUrl: 'html/navbar.html'},
    //     'main' : { templateUrl: 'html/snippets.html' }
    //   }
    // });

});
