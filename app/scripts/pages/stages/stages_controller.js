angular.module('cops').

    controller('StagesCtrl', ['$scope', 'StagesService', 'CompetencesService', 'CaracteristiquesService',
        function($scope, StagesService, CompetencesService, CaracteristiquesService){

        $scope.service = StagesService;
        $scope.stagesAvailable = {};
        $scope.nbrStagesAvailable = 0;

        init();

        function init(){
            angular.forEach(StagesService.getStages(), function(stage, key) {
                if (stageIsAvailable(stage)) {
                    $scope.nbrStagesAvailable ++;
                    $scope.stagesAvailable[key] = stage;
                }
            });
        }

        function stageIsAvailable(stage){
            var ret = true;
            //handle caract
            if(stage.carac_min.hasOwnProperty('operateur')){
                if(stage.carac_min.operateur == 'or'){
                    angular.forEach(stage.carac_min, function(value, key){
                        if(key != 'operateur'){
                            if(!caracOK(value, key)){
                                ret = ret || false;
                            }
                        }
                    });
                }
            }
            else{
                angular.forEach(stage.carac_min, function(value, key){
                    if(key != 'operateur'){
                        if(!caracOK(value, key)){
                            ret = false;
                        }
                    }
                });
            }

            if(ret){
                //handle comp
                if(stage.comp_min.hasOwnProperty('operateur')){
                    if(stage.comp_min.operateur == 'or'){
                        angular.forEach(stage.comp_min, function(value, key){
                            if(key != 'operateur'){
                                if(!compOK(value, key)){
                                    ret = ret || false;
                                }
                            }
                        });
                    }
                }
                else{
                    angular.forEach(stage.comp_min, function(value, key){
                        if(key != 'operateur'){
                            if(!compOK(value, key)){
                                ret = false;
                            }
                        }
                    });
                }
            }
            return ret;
        }

        function caracOK(seuil, carac){
            return CaracteristiquesService.getCaracteristiques()[carac] >= seuil;
        }

        function compOK(seuil, comp){
            return CompetencesService.getCompetences()[comp] <= seuil;
        }
    }]);