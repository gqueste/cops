angular.module('cops').

    controller('EntreeCopsCtrl', ['$scope', 'EntreeCopsService', 'CaracteristiquesService', '$state', 'FooterService', function($scope, EntreeCopsService, CaracteristiquesService, $state, FooterService){

        FooterService.setPercentage(80);
        $scope.service = EntreeCopsService;
        $scope.pointsDisponibles = 2;

        function init(){
            if(!EntreeCopsService.getEntreeSelectionnee().hasOwnProperty('optionChoisie')){
                EntreeCopsService.getEntreeSelectionnee().optionChoisie = EntreeCopsService.getEntreeSelectionnee().options[0];
            }
        }

        init();

        $scope.changeOption = function(option){
            EntreeCopsService.getEntreeSelectionnee().optionChoisie = option;
            if(EntreeCopsService.getEntreeSelectionnee().nom == 'Exotique'){
                $scope.pointsDisponibles = 2;
            }
        };

        $scope.changeEntree = function(entree){
            entree.optionChoisie = entree.options[0];
            EntreeCopsService.setEntreeSelectionnee(entree);
        };

        $scope.isActive = function(entree){
            return EntreeCopsService.getEntreeSelectionnee().nom == entree.nom;
        };

        $scope.canAncienneteDown = function(){
            return EntreeCopsService.getEntreeSelectionnee().optionChoisie.anciennete > 0;
        };

        $scope.ancienneteDown = function(){
            $scope.pointsDisponibles ++;
            EntreeCopsService.getEntreeSelectionnee().optionChoisie.anciennete --;
        };

        $scope.ancienneteUp = function(){
            $scope.pointsDisponibles --;
            EntreeCopsService.getEntreeSelectionnee().optionChoisie.anciennete ++;
        };

        $scope.canAncienneteAdrenalineUp = function(){
            return $scope.pointsDisponibles > 0;
        };

        $scope.canAdrenalineDown = function(){
            return EntreeCopsService.getEntreeSelectionnee().optionChoisie.adrenaline > 0;
        };

        $scope.adrenalineDown = function(){
            $scope.pointsDisponibles ++;
            EntreeCopsService.getEntreeSelectionnee().optionChoisie.adrenaline --;
        };

        $scope.adrenalineUp = function(){
            $scope.pointsDisponibles --;
            EntreeCopsService.getEntreeSelectionnee().optionChoisie.adrenaline ++;
        };


        $scope.goToStages = function(){
            CaracteristiquesService.setPointsAdrenaline(EntreeCopsService.getEntreeSelectionnee().optionChoisie.adrenaline);
            CaracteristiquesService.setPointsAnciennete(EntreeCopsService.getEntreeSelectionnee().optionChoisie.anciennete);
            $state.go('stages');
        }

    }]);