// INITILIZE SERVICE
// ============================================================
angular.module("app").service("pokeService", function($http) {

    // CRUD FUNCTIONS
    // ============================================================

    this.getPokes = function(pokeName) {
        return $http({
            url: 'https://pokeapi.co/api/v2/pokemon/' + pokeName,
            method: 'GET'
        }).then(function(response) {
            // console.log('service:', response);
            return response.data;

        })
    }
    this.getMorePokes = function(pokeName) {
        return $http({
            url: 'https://pokeapi.co/api/v2/pokemon-species/' + pokeName,
            method: 'GET'
        }).then(function(response) {
            console.log('service:', response);
            return response.data;

        })
    }

    this.getPokes = function(pokeName) {
        return $http({
            url: 'https://pokeapi.co/api/v2/pokemon/' + pokeName,
            method: 'GET'
        }).then(function(response) {
            // console.log('service:', response);
            return response.data;

        })
    }





});


// OTHER FUNCTIONS
// ============================================================
//If time look into another API to add pokemon theme song to 'about' page
