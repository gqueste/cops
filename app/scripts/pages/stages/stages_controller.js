angular.module('cops').

    controller('StagesCtrl', ['$scope', 'StagesService', 'CompetencesService', 'CaracteristiquesService', '$state',
        function($scope, StagesService, CompetencesService, CaracteristiquesService, $state){

        $scope.service = StagesService;
        $scope.stagesAvailable = {};
        $scope.nbrStagesAvailable = 0;

        console.log(CaracteristiquesService.getCaracteristiques());

        init();

        function init(){
            $scope.nbrStagesAvailable = 0;
            $scope.stagesAvailable = {};
            angular.forEach(StagesService.getStages(), function(stage, key) {
                if (stageIsAvailable(stage)) {
                    $scope.nbrStagesAvailable ++;
                    $scope.stagesAvailable[key] = stage;
                }
            });
        }

        function stageIsAvailable(stage){
            var ret = true;

            if(estDejaObtenu(stage)){
                ret = stage.cumul;
            }

            //Si le stage n'est pas encore sélectionné ou est en cumul
            if(ret){
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
            }

            return ret;
        }

        function caracOK(seuil, carac){
            if(carac == 'anciennete'){
                return CaracteristiquesService.getPointsAnciennete()>= seuil;
            }
            if(carac == 'adrenaline'){
                return CaracteristiquesService.getPointsAdrenaline() >= seuil;
            }
            return CaracteristiquesService.getCaracteristiques()[carac].points >= seuil;
        }

        function compOK(seuil, comp){
            return CompetencesService.getCompetences()[comp].points <= seuil;
        }

        function estDejaObtenu(stage){
            var ret = false;
            for(var i = 0; i < StagesService.getStagesObtenus().length; i++){
                if(stage.nom == StagesService.getStagesObtenus()[i].nom){
                    ret = true;
                }
            }
            return ret;
        }

        $scope.choisirStage = function(stage){
            StagesService.addStageObtenu(stage);
            init();
        };

        $scope.removeStageObtenu = function(stage) {
            StagesService.removeStageObtenu(stage);
            init();
        };

        $scope.goToRecap = function(){
            $state.go('recap');
        }
    }]);