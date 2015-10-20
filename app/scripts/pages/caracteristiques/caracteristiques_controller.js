angular.module('cops').

    controller('CaracteristiquesCtrl', ['$scope', 'CaracteristiquesService', '$state', 'FooterService', function($scope, CaracteristiquesService, $state, FooterService){

        $scope.service = CaracteristiquesService;
        FooterService.setPercentage(15);

        init();

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

        function init(){
            angular.forEach(CaracteristiquesService.getCaracteristiques(), function(value, key) {
                CaracteristiquesService.getCaracteristiques()[key].points = 2;
                CaracteristiquesService.setPointsDisponibles(CaracteristiquesService.getPointsDisponibles()-2);
            });
        }

        $scope.goCompetences = function(){
            $state.go('competences');
        }

    }]);