var Bluebird = require('bluebird');
var assert = require('assert');

var cache = null;

describe('Base Functionality', function() {
  before(function() {
    cache = require('../index.js');
  });

  describe('#set/get', function() {
    it('Set a value in the local cache', function(done) {
      var result = cache.set('test-key', 'test-value');
      assert.equal(true, result, 'Cache.set() failed!');
      assert.equal('test-value', cache.get('test-key'), 'Cache.get() value is not returning test-value');
      done();
    });

    it('Set a boolean value in the local cache', function(done) {
      assert.equal(true, cache.set('test-boolean', true), 'Cache.set() -> Boolean failed');
      assert.equal(true, cache.get('test-boolean'), 'Cache.get() -> Boolean failed');
      done();
    });
  });
});