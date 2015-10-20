angular.module('cops').

    directive('copsFooter', function(){
        return {
            restrict: 'E',
            templateUrl: 'scripts/components/footer/footer.html',
            controller: 'FooterCtrl'
        };
    });