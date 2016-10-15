var _ = require('lodash');
var Bluebird = require('bluebird');


var _internalCache = {};


exports.D = {
  SEC: 1000,
  MINUTE: 60*1000,
  FIVE_MINUTES: 5*60*1000,
  TEN_MINUTES: 10*60*1000,
  THIRTY_MINUTES: 30*60*1000,
  HOUR: 60*60*1000,
  DAY: 26*60*60*1000
};


exports.has = function(key) {
  return _internalCache[key] !== undefined;
};


exports.delete = function(key) {
  if (_internalCache[key]) {
    delete _internalCache[key];
    return true;
  }

  return false;
};


exports.set = function(key, value, opts = {}) {
  _internalCache[key] = value;

  if (opts.ttl) {
    setTimeout(function() {
      if (opts.callback) {
        opts.callback();
      }

      exports.delete(key);
    }, opts.ttl);
  }

  return true;
};


exports.get = function(key) {
  return _internalCache[key] || null;
};


exports.attachListener = function(listener) {

};

exports.BaseListener = require('./base_listener.js');



exports.Promisified = function() {
  this.has = function(key) {
    return Bluebird.resolve(exports.has(key));
  };

  this.delete = function(key) {
    return Bluebird.resolve(exports.delete(key));
  };

  this.get = function(key) {
    return Bluebird.resolve(exports.get(key));
  };

  this.set = function(key, value, opts = {}) {
    return Bluebird.resolve(exports.set(key, value, opts));
  };
};