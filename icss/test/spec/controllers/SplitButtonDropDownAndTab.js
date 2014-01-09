'use strict';

describe('Controller: SplitbuttondropdownandtabCtrl', function () {

  // load the controller's module
  beforeEach(module('icssApp'));

  var SplitbuttondropdownandtabCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SplitbuttondropdownandtabCtrl = $controller('SplitbuttondropdownandtabCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
