'use strict';

var app = angular.module('routerApp', ['ui.router', 'oitozero.ngSweetAlert']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html',
      controller: 'homeCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: '/html/contact.html',
      controller: 'contactCtrl'
    })
    .state('list', {
      url: '/list',
      templateUrl: '/html/list.html',
      controller: 'listCtrl'
    })
    .state('detail', {
      url: '/detail/:name',
      templateUrl: '/html/detail.html',
      controller: 'detailCtrl',
      resolve: {
        person: function(People, $stateParams) {
            // return a promise which will resolve to the person
            return People.getByName($stateParams.name);
        }
      }
    })
    .state('starwarslist', {
        url: '/starwarslist',
        templateUrl: '/html/starwarslist.html',
        controller: 'starwarslistCtrl'
    })

  $urlRouterProvider.otherwise('/');
});
