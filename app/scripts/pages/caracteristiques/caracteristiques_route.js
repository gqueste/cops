angular.module('cops').

    config(function($stateProvider){
        $stateProvider
            .state('caracteristiques', {
                url: "/caracs",
                templateUrl: './scripts/pages/caracteristiques/caracteristiques.html',
                controller: 'CaracteristiquesCtrl'
            })
    });