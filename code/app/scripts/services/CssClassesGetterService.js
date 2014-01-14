'use strict';

angular.module('icssApp')
  .service('Cssclassesgetterservice', function Cssclassesgetterservice() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
      return {
        getButtonCssClasses : function() { 
                                return[{
                                  "id": "btn"
                                  }, {
                                  "id": "btn-warning"
                                  }, {
                                  "id": "btn-success"
                                  }, {
                                  "id": "btn-danger"
                                  }]
                              }
      }
     
  });
