'use strict';

// INITILIZE DIRECTIVE
// ============================================================
angular.module("app").directive('spinIcon', function ($timeout) {
  return {
    restrict: 'EA',

    link: function link(scope, element, attributes) {
      element.on('click', function () {
        element.toggleClass("rotateAni");
        $timeout(function () {
          element.toggleClass("rotateAni");
        }, 1500);
      });
    }
  };
});
"use strict";

// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("pokeCtrl", function ($scope, pokeService) {

    // VARIABLES
    // ============================================================


    // FUNCTIONS
    // ============================================================
    $scope.getPokes = function () {
        pokeService.getPokes($scope.pokeName.toLowerCase()).then(function (response) {
            console.log(pokeService, response);
            $scope.pokeData = response;
        });
    };

    //=====================================================================

    $scope.getMorePokes = function () {
        pokeService.getMorePokes($scope.pokeName.toLowerCase()).then(function (response) {
            console.log(pokeService, response);
            $scope.pokeData2 = response;
            var desc;
            for (var i = 0; i < $scope.pokeData2.flavor_text_entries.length; i++) {
                if ($scope.pokeData2.flavor_text_entries[i].language.name === "en") {
                    desc = $scope.pokeData2.flavor_text_entries[i].flavor_text;
                }
            }
            $scope.pokeData2.flavor_text = desc;
            console.log(desc);
        });
    };

    $scope.pokeToggle = false;
    $scope.toggle = function () {
        $scope.pokeToggle = true;
    };

    // $scope.randomPokeID = function {
    //   Math.floor((Math.random() * 100) + 1);
    // }
});
"use strict";

// INITILIZE SERVICE
// ============================================================
angular.module("app").service("pokeService", function ($http) {

    // CRUD FUNCTIONS
    // ============================================================

    this.getPokes = function (pokeName) {
        return $http({
            url: 'https://pokeapi.co/api/v2/pokemon/' + pokeName,
            method: 'GET'
        }).then(function (response) {
            // console.log('service:', response);
            return response.data;
        });
    };
    this.getMorePokes = function (pokeName) {
        return $http({
            url: 'https://pokeapi.co/api/v2/pokemon-species/' + pokeName,
            method: 'GET'
        }).then(function (response) {
            console.log('service:', response);
            return response.data;
        });
    };

    this.getPokes = function (pokeName) {
        return $http({
            url: 'https://pokeapi.co/api/v2/pokemon/' + pokeName,
            method: 'GET'
        }).then(function (response) {
            // console.log('service:', response);
            return response.data;
        });
    };
});

// OTHER FUNCTIONS
// ============================================================
//If time look into another API to add pokemon theme song to 'about' page
//# sourceMappingURL=bundle.js.map
