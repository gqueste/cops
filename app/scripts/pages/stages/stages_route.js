angular.module('cops').

    config(function($stateProvider){
        $stateProvider
            .state('stages', {
                url: "/stages",
                templateUrl: './scripts/pages/stages/stages.html',
                controller: 'StagesCtrl'
            })
    });