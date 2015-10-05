angular.module('cops').

    controller('CompetenceCtrl', ['$scope', 'CompetencesService', function($scope, CompetencesService){

        $scope.service = CompetencesService;

        $scope.acquerirComp = function(comp){
            comp.points = 9;
            CompetencesService.setPointsDisponibles(CompetencesService.getPointsDisponibles() - 1);
        };

        $scope.retirerComp = function(comp){
            CompetencesService.setPointsDisponibles(CompetencesService.getPointsDisponibles() + CompetencesService.getMaxValue() + 1 - comp.points);
            if(comp.specialisation){
                if(comp.specialisation.specialitesGagnees){
                    if(comp.specialisation.specialitesGagnees.length > 0){
                        comp.specChoosen = false;
                        comp.specialisation.specialitesGagnees.forEach(function(element){
                            comp.specialisation.specialitesPossibles.push(element);
                        });
                        comp.specialisation.specialitesGagnees = [];
                    }
                }
                if(comp.specialisation.customSpec){
                    comp.specialisation.customSpec = undefined;
                }
            }
            comp.points = 0;
        };

        $scope.canCompUp = function(comp){
            var canCompUp = true;
            if(comp.niveau == 'base' && $scope.limitoptionbase){
                canCompUp = comp.points < comp.pointsBase;
            }
            else{
                canCompUp = comp.points < CompetencesService.getMaxValue();
                if(canCompUp && comp.maxPoints){
                    canCompUp = comp.points < comp.maxPoints;
                }
            }
            return canCompUp;
        };

        $scope.canCompDown = function(comp){
            var canCompDown = CompetencesService.getPointsDisponibles();
            if(canCompDown){
                if($scope.limitoptionbase){
                    if(comp.niveau == 'option'){
                        canCompDown = comp.points > CompetencesService.getLimiteNiveauOption();
                    }
                    else {
                        canCompDown = CompetencesService.getPointsDisponiblesBases() > 0;
                        if(canCompDown){
                            canCompDown = comp.pointsBase - comp.points < CompetencesService.getLimiteDepenseParCompetenceBase();
                        }
                    }
                }
            }
            return canCompDown;
        };

        $scope.compUp = function(comp) {
            comp.points += 1;
            CompetencesService.setPointsDisponibles(CompetencesService.getPointsDisponibles() + 1);
            if(comp.niveau == 'base' && $scope.limitoptionbase){
                CompetencesService.setPointsDisponiblesBases(CompetencesService.getPointsDisponiblesBases() + 1);
            }
            if(comp.specialisation){
                if(comp.specialisation.specialitesGagnees){
                    if(comp.specialisation.specialitesGagnees.length > 0 && comp.specialisation.niveau < comp.points){
                        comp.specChoosen = false;
                        comp.specialisation.specialitesGagnees.forEach(function(element){
                            comp.specialisation.specialitesPossibles.push(element);
                        });
                        comp.specialisation.specialitesGagnees = [];
                    }
                }
                if(comp.specialisation.customSpec){
                    if(comp.specialisation.niveau < comp.points){
                        comp.specialisation.customSpec = undefined;
                    }
                }
            }

        };

        $scope.compDown = function(comp){
            comp.points -= 1;
            CompetencesService.setPointsDisponibles(CompetencesService.getPointsDisponibles() - 1);
            if(comp.niveau == 'base' && $scope.limitoptionbase){
                CompetencesService.setPointsDisponiblesBases(CompetencesService.getPointsDisponiblesBases() - 1);
            }
        };

        $scope.addSpec = function(comp, spec){
            if(comp.specialisation.specialitesGagnees == undefined){
                comp.specialisation.specialitesGagnees = [];
            }
            comp.specialisation.specialitesGagnees.push(spec);
            comp.specChoosen = true;
            var compSpecs = [];
            comp.specialisation.specialitesPossibles.forEach(function(element){
                if(element != spec){
                    compSpecs.push(element);
                }
            });
            comp.specialisation.specialitesPossibles = compSpecs;
        };

        $scope.changeCustomSpec = function(comp, spec){
            comp.specialisation.customSpec = spec;
        };

        $scope.removeSpec = function(comp, spec){
            comp.specialisation.specialitesPossibles.push(spec);
            comp.specChoosen = false;
            var compSpecs = [];
            comp.specialisation.specialitesGagnees.forEach(function(element){
                if(element != spec){
                    compSpecs.push(element);
                }
            });
            comp.specialisation.specialitesGagnees = compSpecs;
        };

    }]);