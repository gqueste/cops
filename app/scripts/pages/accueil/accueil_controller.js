angular.module('cops').

    controller('AccueilCtrl', ['$scope', '$state', 'FooterService', function($scope, $state, FooterService){

        FooterService.setPercentage(0);

        $scope.goToCarac = function(){
            $state.go('caracteristiques');
        };



    }]);