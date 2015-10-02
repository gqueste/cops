angular.module('cops').

    controller('OrigineCtrl', ['$scope', 'OrigineService', '$state', function($scope, OrigineService, $state){

        $scope.service = OrigineService;

        $scope.activeOrigine = {};

        $scope.changeOrigine = function(origine){
            $scope.activeOrigine =  origine;
            $scope.activeOrigine.possessionChoisie = origine.possessionsPossibles[0];
        };

        $scope.changeOrigine(OrigineService.getOrigines()['enfant_ghetto']);

        $scope.isActive = function(origine){
            return $scope.activeOrigine.nom == origine.nom;
        };

        $scope.changePossession = function(possession){
            $scope.activeOrigine.possessionChoisie = possession;
        };

        $scope.goToEtudes = function(){
            OrigineService.setOrigineSelectionnee($scope.activeOrigine);
            $state.go('etudes');
        };

    }]);