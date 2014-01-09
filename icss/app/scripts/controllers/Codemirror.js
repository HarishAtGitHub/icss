'use strict';

angular.module('icssApp')
    .controller('CodemirrorCtrl', function($scope) {
        $scope.editorOptions = {
            lineNumbers: true,
            lineWrapping : true,
            mode: 'css'
        };
    });
/*var app = angular.module('icssApp');
app.controller('CodemirrorCtrl', function($scope) {
    $scope.editorOptions = {
        lineNumbers: true,
        lineWrapping : true,
        mode: 'xml'
    };
});*/

