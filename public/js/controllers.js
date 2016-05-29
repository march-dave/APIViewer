'use strict';

var app = angular.module('starWarsApp');


app.controller('homeCtrl', function($q, $http) {
});

app.controller('listCtrl', function($scope, $state, starDex) {
  $scope.starDex = starDex;
});

app.controller('detailCtrl', function($scope, $interval, starwars) {
  $scope.starwars = starwars;
})
