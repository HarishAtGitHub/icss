'use strict';

describe('Service: Getactivetab', function () {

  // load the service's module
  beforeEach(module('icssApp'));

  // instantiate service
  var Getactivetab;
  beforeEach(inject(function (_Getactivetab_) {
    Getactivetab = _Getactivetab_;
  }));

  it('should do something', function () {
    expect(!!Getactivetab).toBe(true);
  });

});
