'use strict';

describe('Controller: ViewdesigncomboCtrl', function () {

  // load the controller's module
  beforeEach(module('icssApp'));

  var ViewdesigncomboCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewdesigncomboCtrl = $controller('ViewdesigncomboCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
