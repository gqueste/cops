angular.module('cops').

    controller('OrigineCtrl', ['$scope', 'OrigineService', '$state', function($scope, OrigineService, $state){

        $scope.service = OrigineService;

    }]);