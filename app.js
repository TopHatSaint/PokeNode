// INITILIZE APP
// ============================================================
angular.module("app", ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

    // INITILIZE STATES
    // ============================================================
    $stateProvider

        // POKEDEX STATE
        .state('pokedex', {
            url: '/',
            templateUrl: './views/pokedex.html',
            controller: 'pokeCtrl'
        })

        // Trivia STATE
        .state('whosThatPoke', {
            url: '/whosThatPoke',
            templateUrl: './views/whosThatPoke.html',
            controller: 'pokeCtrl'
        })

        // about STATE
        .state('About', {
            url: '/About',
            templateUrl: './views/about.html',
            controller: 'pokeCtrl'
        });



    // ASSIGN OTHERWISE
    // ============================================================
    $urlRouterProvider.otherwise('/');
});
