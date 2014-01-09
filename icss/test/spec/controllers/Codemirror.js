'use strict';

describe('Controller: CodemirrorCtrl', function () {

  // load the controller's module
  beforeEach(module('icssApp'));

  var CodemirrorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CodemirrorCtrl = $controller('CodemirrorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
