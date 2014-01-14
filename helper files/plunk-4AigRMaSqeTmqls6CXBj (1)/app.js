var app = angular.module('plunker', ['ui','ui.select2']);

app.controller('MainCtrl', function($scope, $http) {
  var items;
  
  $http.get('data.json').success(function(response){
    // Version 1
    $scope.items = response;
  });
  
});

app.controller('typeaheadctrl', function($scope) {
    $scope.selecttag = {
        'multiple': true,
        'simple_tags': true,
        'tags': ['tag1', 'tag2', 'tag3', 'tag4']  // Can be empty list.
    };
});