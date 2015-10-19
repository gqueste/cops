angular.module('cops').

    filter('object2Array', function() {
        return function(input) {
            return _.toArray(input);
        }
    });