angular.module('cops').

    controller('EntreeCopsCtrl', ['$scope', 'EntreeCopsService', '$state', function($scope, EntreeCopsService, $state){

        $scope.service = EntreeCopsService;

        $scope.changeOption = function(option){
            EntreeCopsService.getEntreeSelectionnee().optionChoisie = option;
        };

        $scope.changeEntree = function(entree){
            EntreeCopsService.setEntreeSelectionnee(entree);
            $scope.changeOption(entree.options[0]);
        };

        $scope.changeEntree(EntreeCopsService.getEntrees()['academie']);

        $scope.isActive = function(entree){
            return EntreeCopsService.getEntreeSelectionnee().nom == entree.nom;
        };

        $scope.goToRelationsSupplementaires = function(){

        }

    }]);