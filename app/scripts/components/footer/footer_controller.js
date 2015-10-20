angular.module('cops').

    controller('FooterCtrl', ['$scope', 'FooterService', function($scope, FooterService){

        $scope.service = FooterService;

    }]);