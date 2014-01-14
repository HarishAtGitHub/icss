'use strict';

angular.module('icssApp')
  .controller('InputintellisenseCtrl', function ($scope, Cssclassesgetterservice) {
    
    /* DEBUGGING HELPER :
    use the below for debugging by including ng-change="showDialog(component.cssClass)" in the input element
    $scope.showDialog = function (item) {
      console.log(item);
    };
    */
    function formatResult() { 
      return function(data) {
               var markup;
               if (data.n === "new") markup = "<div> <button class='btn-success btn-margin'><i class='icon-plus icon-white'></i> Use :" + data.id + "</button></div>";
               else markup = "<div>" + data.id + "</div>";
               return markup ;
             }
    };

    function formatSelection() { 
      return function (data) {
               return "<b>" + data.id + "</b></div>";
             }
    };

    function createSearchChoice() {
      return function (term, data) {
        if ($(data).filter(function () {
             return this.v.localeCompare(term) === 0;
           }).length === 0) {
             return {
                      id: term,
                      text : term,
                      n: "new",
                      s: ""
                    };
                }
             }
    };

    $scope.select2Config = {
      multiple: true,
      data: Cssclassesgetterservice.getButtonCssClasses(),
      simple_tags : true,
      tokenSeparators: [","],
      createSearchChoice: createSearchChoice(),
      formatResult: formatResult(),
      formatSelection: formatSelection(),
      dropdownCssClass: "bigdrop",
      escapeMarkup: function (m) {
                      return m ;
                    }
    };

});
