angular.module('cops').

    config(function($stateProvider){
        $stateProvider
            .state('competences', {
                url: "/comps",
                templateUrl: './scripts/pages/competences/competences.html',
                controller: 'CompetencesCtrl'
            })
    });