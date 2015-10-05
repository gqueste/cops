angular.module('cops').

    controller('EtudesCtrl', ['$scope', 'CompetencesService', 'EtudesService', '$state', function($scope, CompetencesService, EtudesService, $state){

        $scope.CompetencesService = CompetencesService;
        $scope.EtudesService = EtudesService;

        $scope.limitOptionBase = false;

        $scope.activeEtude = {};

        angular.forEach(CompetencesService.getCompetences(), function(value){
            value.maxPoints = value.points;
        });

        $scope.changeEtude = function(etude){
            $scope.activeEtude =  etude;
            angular.forEach(CompetencesService.getCompetences(), function(value){
                value.points = value.maxPoints;
            });
            CompetencesService.setPointsDisponibles(2);
        };

        $scope.isActive = function(etude){
            return $scope.activeEtude.nom == etude.nom;
        };

        $scope.changeEtude(EtudesService.getEtudes()['rue']);

        $scope.goToEntreeCops = function(){
            EtudesService.setEtudeSelectionnee($scope.activeEtude);
            $state.go('entreeCops');
        }

    }]);