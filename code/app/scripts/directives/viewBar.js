'use strict';

angular.module('icssApp')
    .directive('viewBar', function () {
        return {
            restrict : 'CAME',
            templateUrl: 'views/templates/viewBar.html',
            transclude: true
        };
    });
