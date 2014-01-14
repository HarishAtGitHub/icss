'use strict';

angular.module('icssApp')
    .directive('designBar', function () {
        return {
            restrict : 'CAME',
            templateUrl: 'views/templates/designBar.html',
            transclude: true
        };
    });
