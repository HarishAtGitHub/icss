'use strict';

describe('Service: Cssclassesgetterservice', function () {

  // load the service's module
  beforeEach(module('icssApp'));

  // instantiate service
  var Cssclassesgetterservice;
  beforeEach(inject(function (_Cssclassesgetterservice_) {
    Cssclassesgetterservice = _Cssclassesgetterservice_;
  }));

  it('should do something', function () {
    expect(!!Cssclassesgetterservice).toBe(true);
  });

});
