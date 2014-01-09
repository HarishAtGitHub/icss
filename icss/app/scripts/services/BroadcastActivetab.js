'use strict';

angular.module('icssApp')
    .service('Broadcastactivetab', function Getactivetab($rootScope) {
        // AngularJS will instantiate a singleton by calling "new" on this function
        return {
            broadcastId : function (id){
                $rootScope.$broadcast('activeTabChanged', id);
            }
        }
    });
