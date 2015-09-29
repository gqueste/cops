angular.module('cops').

    config(function($stateProvider){
        $stateProvider
            .state('historique', {
                url: "/origine",
                templateUrl: './scripts/pages/origine/origine.html',
                controller: 'OrigineCtrl'
            })
    });