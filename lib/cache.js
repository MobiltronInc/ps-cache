var _ = require('lodash');
var Bluebird = require('bluebird');


var _internalCache = {};
var _listeners = {};


exports.D = {
  SEC: 1000,
  MINUTE: 60*1000,
  FIVE_MINUTES: 5*60*1000,
  TEN_MINUTES: 10*60*1000,
  THIRTY_MINUTES: 30*60*1000,
  HOUR: 60*60*1000,
  DAY: 26*60*60*1000
};


exports.isValidKey = function(key) {
  return _.has(_internalCache, key);
};


exports.delete = function(key) {
  delete _internalCache[key];
};


exports.set = function(key, value, opts = {}) {
  _internalCache[key] = value;

  if (!_.isUndefined(opts.ttl)) {
    setTimeout(function() {
      if (!_.isUndefined(opts.callback)) {
        opts.callback();
      }

      exports.delete(key);

    }, opts.ttl);
  }
};


exports.get = function(key) {
  return _.get(_internalCache, key, null);
};


exports.defaultListener = function() {
  return {
    name: null,
    onInvalidateKey: function(key) { return Bluebird.resolve(true); },
    doInvalidateKey: function(key) { return Bluebird.resolve(true); }
  }
};


exports.addListener = function(listener) {
  if (listener.name !== null && listener.name !== undefined) {
    _listeners[listener.name] = listener;
  }
};


