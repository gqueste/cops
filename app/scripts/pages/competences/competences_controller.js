angular.module('cops').

    controller('CompetencesCtrl', ['$scope', 'CompetencesService', '$state', 'FooterService', function($scope, CompetencesService, $state, FooterService){

        $scope.service = CompetencesService;
        FooterService.setPercentage(30);

        $scope.limitOptionBase = true;

        $scope.changeChoixBase = function(choix){
            reinitChoixBase();
            changeChoix(choix);
        };

        init();

        function init(){
            angular.forEach(CompetencesService.getCompetences(), function(value){
                if(value.hasOwnProperty('maxPoints')){
                    //si maxPoints, ça veut dire qu'on est revenu depuis les études donc possibilité d'avoir été changé. On reset.
                    value.points = value.maxPoints;
                    CompetencesService.setPointsDisponibles(0);
                }
            });
        }

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

        $scope.canGoToHistorique = function(){
            var ret = true;
            ret = CompetencesService.getPointsDisponibles() == 0;
            if(ret){
                angular.forEach(CompetencesService.getCompetences(), function(comp){
                    if(comp.hasOwnProperty('specialisation')){
                        if(comp.points != 0 && comp.points <= comp.specialisation.niveau){
                            if(!comp.specialisation.customSpec && (!comp.specialisation.specialitesGagnees || comp.specialisation.specialitesGagnees.length == 0)){
                                ret = false;
                            }
                        }
                    }
                });
            }
            return ret;
        };

        $scope.goToHistorique = function(){
            $state.go('historique');
        }

    }]);