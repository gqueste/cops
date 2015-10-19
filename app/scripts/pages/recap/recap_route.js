angular.module('cops').

    config(function($stateProvider){
        $stateProvider
            .state('recap', {
                url: "/recap",
                templateUrl: './scripts/pages/recap/recap.html',
                controller: 'RecapCtrl'
            })
    });