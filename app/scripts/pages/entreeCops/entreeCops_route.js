angular.module('cops').

    config(function($stateProvider){
        $stateProvider
            .state('entreeCops', {
                url: "/entreeCops",
                templateUrl: './scripts/pages/entreeCops/entreeCops.html',
                controller: 'EntreeCopsCtrl'
            })
    });