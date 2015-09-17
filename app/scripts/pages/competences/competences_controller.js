angular.module('cops').

    controller('CompetencesCtrl', ['$scope', 'CompetencesService', function($scope, CompetencesService){

        $scope.service = CompetencesService;

        $scope.changeChoixBase = function(choix){
            reinitChoixBase();
            changeChoix(choix);
        };

        function reinitChoixBase(){
            for(var i = 0; i < CompetencesService.getChoixBasePossibilites(); i++){
                var comp = CompetencesService.getCompetences()[CompetencesService.getChoixBasePossibilites()[i]];
                var seuil = 10;
                if(CompetencesService.getChoixBasePossibilites()[i] == CompetencesService.getChoixBase()){
                    seuil = 7;
                }
                if(comp.points > 0){
                    var diff = seuil - comp.points;
                    CompetencesService.setPointsDisponibles(CompetencesService.getPointsDisponibles() + diff);
                }
                comp.points = 0;
            }
        }

        function changeChoix(choix){
            CompetencesService.setChoixBase = choix;
            CompetencesService.getCompetences()[choix].points = 7;
        }

    }]);