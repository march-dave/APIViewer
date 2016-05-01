'use strict';

var app = angular.module('starWarsApp');


app.controller('homeCtrl', function($q, $http) {
  console.log('homeCtrl111111');
});

app.controller('listCtrl', function($scope, $state, starDex) {
  console.log('listCtrl1111', starDex);
  $scope.starDex = starDex;
});

app.controller('detailCtrl', function($scope, $interval, starwars) {
  $scope.starwars = starwars;

  console.log('starwars', starwars);

  // var sprites = starwars.sprites;
  // var keys = Object.keys(sprits);
  // var numSprites = key.length;

  // Just for comment out Start Wars images data key value name verify
  // var count = 0;
  // $interval(function() {
  //   count++;
  //
  //   var index = count % numSprites;
  //   var spriteUrl = sprites[keys[index]];
  //   $scope.sprite = spriteUrl;
  //
  // }, 1000);

})

// app.controller('homeCtrl', function($scope, $state, PeopleList) {
//
//   $scope.getCharacter = function (index) {
//     $state.go('about', {
//       peopleIndex: index
//     })
//   }
//   PeopleList.getAll()
//    .then(peopleList => {
//      $scope.peopleList = peopleList;
//    });
// });
//
// app.controller('aboutCtrl', function ($stateParams, $scope, person) {
//   // $scope.thisCharacter = SwapiService.characters[$stateParams.peopleIndex];
//
//   // {{person.name}} - {{person.height}} - {{person.hair_color}}
//
//   // var person = {
//   //   name: "Luke Skywalker",
//   //   height: "172",
//   //   hair_color: "red"
//   // }
//
//   // console.log('person', person);
//
//   //$scope.thisCharacter = person;
//
//   // console.log('$stateParams', $stateParams);
//   // console.log('$scope', $scope);
//   // console.log('person', person);
// });
//
//
//
// //   $scope.getCharacter = function(index) {
// //     // $state.go('starwarsdetails', {
// //
// //     $state.go('detail', {
// //       peopleIndex: index
// //     })
// //   }
// //
// //   PeopleList.getAll()
// //   .then(peopleList => {
// //     $scope.peopleList = peopleList;
// //   });
// // });
//
// // app.controller('detailCtrl', function($scope, person) {
// //   $scope.person = person;
// // });
// app.controller('detailCtrl', function($scope, person) {
//   // $scope.person = person;
//   console.log('dsfksdhsfdjhkks');
// });
//
// // app.controller('starwarsdetailsCtrl', function ($stateParams, $scope) {
// //   console.log('dsfksdhsfdjhkks');
// // });
//
//
//
// app.controller('listCtrl', function($scope, $state, People) {
//   People.getAll()
//   .then(people => {
//     $scope.people = people;
//   });
// });
//
//
// app.controller('starwarslistCtrl', function($scope, $state, PeopleList) {
//   $scope.getCharacter = function(index) {
//     $state.go('starwarsdetails', {
//       peopleIndex: index
//     })
//   }
//
//   PeopleList.getAll()
//   .then(peopleList => {
//     $scope.peopleList = peopleList;
//   });
// });
//
// app.controller('starwarsdetailsCtrl', function ($stateParams, $scope) {
//   console.log('dsfksdhsfdjhkks');
// });
//
// app.controller('contactCtrl', function($scope, $state, SweetAlert) {
//
//   $scope.showAlert = () => {
//     SweetAlert.swal({
//       title: "Are you sure?",
//       text: "You want to go home?",
//       type: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#DD6B55",
//       confirmButtonText: "Yes, go home!",
//       closeOnConfirm: true
//     }, function(isConfirm) {
//       if(isConfirm) {
//         $state.go('home');
//       }
//     });
//   };
// });
