'use strict';

angular.module('icssApp')
    .controller('TabcontrolledbydropdownCtrl', function ($scope,Broadcastactivetab) {
        // Tab directive

        $scope.tabs = [
            //{page: 'html/welcome.html'},
            {page: 'views/components/button.html'},
            {page: 'views/components/box.html'},
            {page: 'views/components/text.html' }
        ];

        $scope.tabs.activeTab = 0;
        $scope.$on('activeTabChanged', function(event, id) {//doubt what is this argument event why do we need it
            $scope.tabs.activeTab = id;
        });
    });
