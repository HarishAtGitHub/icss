'use strict';

describe('Controller: InputintellisenseCtrl', function () {

  // load the controller's module
  beforeEach(module('icssApp'));

  var InputintellisenseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InputintellisenseCtrl = $controller('InputintellisenseCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
