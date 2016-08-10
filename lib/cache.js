var _ = require('lodash');


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


exports.isValidKey = function(key) {
  return _.has(_internalCache, key);
};


exports.delete = function(key) {
  delete _internalCache[key];
};


exports.set = function(key, value, opts = {}) {
  _internalCache[key] = value;

  if (!_.isUndefined(opts.ttl)) {
    setTimeout(opts.callback, opts.ttl);
  }
};


exports.get = function(key) {
  return _.get(_internalCache, key, null);
};


exports.init = function(options) {

};