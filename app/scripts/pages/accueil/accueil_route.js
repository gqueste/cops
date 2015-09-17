angular.module('cops').

    config(function($stateProvider){
        $stateProvider
            .state('accueil', {
                url: "",
                templateUrl: './scripts/pages/accueil/accueil.html',
                controller: 'AccueilCtrl'
            });

        $stateProvider
            .state('accueil2', {
                url: "/",
                templateUrl: './scripts/pages/accueil/accueil.html',
                controller: 'AccueilCtrl'
            })
    });