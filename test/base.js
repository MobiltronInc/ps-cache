var Bluebird = require('bluebird');
var assert = require('assert');

var cache = null;

describe('Base Functionality', function() {
  before(function() {
    cache = require('../index.js');
    cache.attachListener(new cache.LocalListener(cache));
  });

  describe('#set', function() {
    it('Should set a value in the local cache', function(done) {

      assert(true);
    });
  });
});