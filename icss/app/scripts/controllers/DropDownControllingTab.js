'use strict';

angular.module('icssApp')
    .controller('DropdowncontrollingtabCtrl', function ($scope,Broadcastactivetab,$window) {
        $scope.$alert = $window.alert.bind(null);
        $scope.$activetabservice = Broadcastactivetab;// doubt : why can't we directly access the Activetab , why should we allocate in scope and get

        $scope.dropdown = [ //doubt what is so special about variables like dropdown and tab is it specifies inside directive
            {text: 'Button', click: "$activetabservice.broadcastId(0)"},//thought href: '#button' does not serve any purpose if you add it u can track route in url or else there will be no change in url
            {text: 'Box',    click: "$activetabservice.broadcastId(1)"},
            {text: 'text',   click: "$activetabservice.broadcastId(2)"}
        ];
    });
