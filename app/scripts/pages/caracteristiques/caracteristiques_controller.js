angular.module('cops').

    controller('CaracteristiquesCtrl', ['$scope', 'CaracteristiquesService', '$state', 'FooterService', function($scope, CaracteristiquesService, $state, FooterService){

        $scope.service = CaracteristiquesService;
        FooterService.setPercentage(15);

        $scope.caracUp = function(carac){
            carac.points ++;
            CaracteristiquesService.setPointsDisponibles(CaracteristiquesService.getPointsDisponibles()-1);
            if(carac.points === CaracteristiquesService.getMaximumValue()){
                CaracteristiquesService.setMaximumAchieved(true);
            }
        };

        $scope.caracDown = function(carac){
            if(carac.points === CaracteristiquesService.getMaximumValue()){
                CaracteristiquesService.setMaximumAchieved(false);
            }
            carac.points --;
            CaracteristiquesService.setPointsDisponibles(CaracteristiquesService.getPointsDisponibles()+1);
        };

        $scope.goCompetences = function(){
            $state.go('competences');
        }

    }]);