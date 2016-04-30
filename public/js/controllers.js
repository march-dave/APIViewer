'use strict';

var app = angular.module('routerApp');

app.controller('listCtrl', function($scope, $state, People) {
  People.getAll()
  .then(people => {
    $scope.people = people;
  });
});

app.controller('detailCtrl', function($scope, person) {
  $scope.person = person;
});

app.controller('homeCtrl', function() {
  console.log('homeCtrl!');
});

app.controller('contactCtrl', function($scope, $state, SweetAlert) {
  console.log('contactCtrl!');

  $scope.showAlert = () => {
    SweetAlert.swal({
      title: "Are you sure?",
      text: "You want to go home?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, go home!",
      closeOnConfirm: true
    }, function(isConfirm) {
      if(isConfirm) {
        $state.go('home');
      }
    });
  };
});

app.controller('starwarslistCtrl', function($scope, PeopleList) {
  console.log('starWarsListCtrl!');

  PeopleList.getAll()
  .then(peopleList => {
    $scope.peopleList = peopleList;
  });

});
