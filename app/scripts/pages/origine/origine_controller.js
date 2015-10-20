angular.module('cops').

    controller('OrigineCtrl', ['$scope', 'OrigineService', '$state', 'FooterService', function($scope, OrigineService, $state, FooterService){

        FooterService.setPercentage(50);
        $scope.service = OrigineService;

        function init(){
            if(!OrigineService.getOrigineSelectionnee().hasOwnProperty('possessionChoisie')){
                OrigineService.getOrigineSelectionnee().possessionChoisie = OrigineService.getOrigineSelectionnee().possessionsPossibles[0];
            }
        }

        init();

        $scope.changeOrigine = function(origine){
            origine.possessionChoisie = origine.possessionsPossibles[0];
            OrigineService.setOrigineSelectionnee(origine);
        };

        $scope.isActive = function(origine){
            return OrigineService.getOrigineSelectionnee().nom == origine.nom;
        };

        $scope.changePossession = function(possession){
            OrigineService.getOrigineSelectionnee().possessionChoisie = possession;
        };

        $scope.goToEtudes = function(){
            $state.go('etudes');
        };

    }]);