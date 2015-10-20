angular.module('cops').

    factory('FooterService', [function(){

        var percentage = 0;

        return{
            getPercentage: getPercentage,
            setPercentage: setPercentage
        };

        function getPercentage(){
            return percentage;
        }

        function setPercentage(perc){
            percentage = perc;
        }



    }]);