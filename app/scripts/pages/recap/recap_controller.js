angular.module('cops').

    controller('RecapCtrl', ['$scope', 'StagesService', 'CompetencesService', 'CaracteristiquesService', 'OrigineService', 'EtudesService', 'EntreeCopsService', 'FooterService',
        function($scope, StagesService, CompetencesService, CaracteristiquesService, OrigineService, EtudesService, EntreeCopsService, FooterService){

            FooterService.setPercentage(100);

            $scope.caracteristiquesService = CaracteristiquesService;
            $scope.competencesService = CompetencesService;
            $scope.stagesService = StagesService;
            $scope.origineService = OrigineService;
            $scope.etudesService = EtudesService;
            $scope.entreeCopsService = EntreeCopsService;

        }]);