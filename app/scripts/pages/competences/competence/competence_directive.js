angular.module('cops').

    directive('copsCompetence', function(){
        return {
            restrict: 'E',
            templateUrl: 'scripts/pages/competences/competence/competence.html',
            controller: 'CompetenceCtrl',
            scope: {
                comp: '=',
                limitoptionbase: '='
            }
        };
    });