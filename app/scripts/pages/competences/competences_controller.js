angular.module('cops').

    controller('CompetencesCtrl', ['$scope', 'CompetencesService', function($scope, CompetencesService){

        $scope.service = CompetencesService;

        $scope.changeChoixBase = function(choix){
            reinitChoixBase();
            changeChoix(choix);
        };

        function reinitChoixBase(){
            CompetencesService.getChoixBasePossibilites().forEach(function(value){
                var comp = CompetencesService.getCompetences()[value];
                var seuil = 10;
                if(value == CompetencesService.getChoixBase()){
                    seuil = 7;
                }
                if(comp.points > 0){
                    var diff = seuil - comp.points;
                    CompetencesService.setPointsDisponibles(CompetencesService.getPointsDisponibles() + diff);
                }
                comp.points = 0;
                comp.niveau = 'option';
            });
        }

        function changeChoix(choix){
            CompetencesService.setChoixBase(choix);
            CompetencesService.getCompetences()[choix].points = 7;
            CompetencesService.getCompetences()[choix].pointsBase = 7;
            CompetencesService.getCompetences()[choix].niveau = 'base';
        }

        $scope.acquerirComp = function(comp){
            comp.points = 9;
            CompetencesService.setPointsDisponibles(CompetencesService.getPointsDisponibles() - 1);
        };

        $scope.retirerComp = function(comp){
            CompetencesService.setPointsDisponibles(CompetencesService.getPointsDisponibles() + CompetencesService.getMaxValue() + 1 - comp.points);
            comp.points = 0;
        };

        $scope.canCompUp = function(comp){
            var canCompUp = true;
            if(comp.niveau == 'base'){
                canCompUp = comp.points < comp.pointsBase;
            }
            else{
                canCompUp = comp.points < CompetencesService.getMaxValue();
            }
            return canCompUp;
        }

    }]);