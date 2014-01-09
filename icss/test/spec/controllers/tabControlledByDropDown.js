'use strict';

describe('Controller: TabcontrolledbydropdownCtrl', function () {

  // load the controller's module
  beforeEach(module('icssApp'));

  var TabcontrolledbydropdownCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TabcontrolledbydropdownCtrl = $controller('TabcontrolledbydropdownCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
