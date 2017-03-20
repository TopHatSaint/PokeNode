// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("pokeCtrl", function($scope, pokeService) {

    // VARIABLES
    // ============================================================


    // FUNCTIONS
    // ============================================================
    $scope.getPokes = function() {
        pokeService.getPokes($scope.pokeName.toLowerCase())
            .then(function(response) {
                console.log(pokeService, response);
                $scope.pokeData = response;
            })
    }

    //=====================================================================

    $scope.getMorePokes = function() {
        pokeService.getMorePokes($scope.pokeName.toLowerCase())
            .then(function(response) {
                console.log(pokeService, response);
                $scope.pokeData2 = response;
                var desc;
                for(var i = 0; i < $scope.pokeData2.flavor_text_entries.length; i++){
                  if($scope.pokeData2.flavor_text_entries[i].language.name === "en" ){
                   desc = $scope.pokeData2.flavor_text_entries[i].flavor_text;
                  }
                }
                $scope.pokeData2.flavor_text = desc;
                console.log(desc);
            })
    }

    $scope.pokeToggle = false;
    $scope.toggle = function(){
      $scope.pokeToggle = true;
    }

    // $scope.randomPokeID = function {
    //   Math.floor((Math.random() * 100) + 1);
    // }
});
