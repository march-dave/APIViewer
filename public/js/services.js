'use strict';

var app = angular.module('starWarsApp');

app.service('StarWars', function($http, $q) {

  this.getStarDex = id => {
    return $http({
      method: 'GET',
      url: `http://swapi.co/api/people/?page=${id}`,
      cache: true
    })
    .then(res => {
        return $q.resolve(res.data.results);
    })
  };

  this.getById = id => {
    return $http({
      method: "GET",
      url: `http://swapi.co/api/people/${id}`,
      cache: true
    })
    .then(res => $q.resolve(res.data));

  };
})
