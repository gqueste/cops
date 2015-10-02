angular.module('cops').

    config(function($stateProvider){
        $stateProvider
            .state('etudes', {
                url: "/etudes",
                templateUrl: './scripts/pages/etudes/etudes.html',
                controller: 'EtudesCtrl'
            })
    });