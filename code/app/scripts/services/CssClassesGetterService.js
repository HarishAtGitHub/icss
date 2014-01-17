'use strict';

angular.module('icssApp')
  .service('Cssclassesgetterservice', function Cssclassesgetterservice() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    // TO BE FIXED : See if you can provide an array as value instead of giving a redundnat key by name "id"
    this.getBootstrapButtonCssClasses = function() { 
                                 return [
                                           {
                                             "id": "btn"
                                           }, {
                                             "id": "btn-danger"
                                           }, {
                                             "id": "btn-default"
                                           }, {
                                             "id": "btn-info"
                                           }, {
                                             "id": "btn-lg"
                                           }, {
                                             "id": "btn-sm"
                                           }, {
                                             "id": "btn-link"
                                           }, {
                                             "id": "btn-primary"
                                           }, {
                                             "id": "btn-success"
                                           }, {
                                             "id": "btn-warning"
                                           }, {
                                             "id": "btn-xs"
                                           }, {
                                             "id": "btn-block"
                                           }, {
                                             "id": "disabled"
                                           }
                                       ];
                               }

     
  });
