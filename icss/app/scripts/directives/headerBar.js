'use strict';

angular.module('icssApp')
    .directive('headerBar', function () {
        return {
            restrict : 'CAME',
            templateUrl: 'views/templates/headerBar.html'
        };
    });
